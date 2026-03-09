    //POST AND PUT Request should send data to the api as body of the request object
    //GET and DELETE requests dont support the body of the request object.So that these two requests can send data through endpoint


//Create HTTP server
import exp from 'express'
const app=exp()
import {userApp} from './APIs/userAPI.js'
import {productApp} from './APIs/productAPI.js'

//use body parser middleware(in-built)
app.use(exp.json())

function middleware(req,res,next){
    console.log('middleware')
}
app.use(middleware)

//Create a custom middleware
function middleware1(req,res,next){
    //send res from middleware
    //res.json({message:'this res from middleware1'})
    console.log('middleware1 is executed')
    next()
}
function middleware2(req,res,next){
    //send res from middleware
    res.json({message:'this res from middleware2'})
    console.log('middleware2 is executed')
    next()
}

//user middleware
app.use(middleware1)
app.use(middleware2)


//forward req to userAPI if path starts with user-api
app.use('/user-api',userApp)

//forward req to userAPI if path starts with product-api
app.use('/product-api',productApp)

//Set a port number
const port=2106

//assign port number to HTTP server
app.listen(port,()=>console.log(`Server listening to port ${port}...`))

