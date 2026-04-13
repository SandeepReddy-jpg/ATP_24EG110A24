import exp from 'express'
import 'dotenv/config'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { authorApp } from './APIs/AuthorAPI.js'
import { adminApp } from './APIs/AdminAPI.js'
import { commonApp } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = exp()

// FIX 1: Dynamic CORS — allows localhost + any vercel.app subdomain (covers all preview URLs)
app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        origin === 'http://localhost:5173' ||
        origin.endsWith('.vercel.app')
      ) {
        return callback(null, true)
      }
      callback(new Error('Not allowed by CORS'))
    },
    credentials: true
  })
)

// Add cookie parser middleware
app.use(cookieParser())

// Body parser middleware
app.use(exp.json())

// Path level middleware
app.use('/user-api', userApp)
app.use('/author-api', authorApp)
app.use('/admin-api', adminApp)
app.use('/auth', commonApp)

// Connect to DB
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: 10000
    })
    console.log('DB Connected')
    const port = process.env.PORT || 4000
    app.listen(port, () => console.log(`server listening on ${port}`))
  } catch (err) {
    console.log('Error in DB Connect', err)
  }
}

console.log('ENV DB_URL:', process.env.DB_URL ? 'loaded ✓' : 'MISSING ✗')
connectDB()

// Handle invalid path
app.use((req, res, next) => {
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

// Handle errors
app.use((err, req, res, next) => {
  console.log(err.name, err.message)

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message })
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ message: err.message })
  }
  // FIX 2: Handle duplicate email (MongoDB error code 11000) and MongooseError
  if (err.code === 11000 || err.name === 'MongooseError') {
    return res.status(409).json({ message: err.message })
  }
  res.status(500).json({ message: 'Error occured', error: err.message })
})