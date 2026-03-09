//Create mini-express userApp(Seperate route)
import exp from 'express'
export const userApp = exp.Router()


//Test data (Replace this test data with DB)
let users = []
//Create API(REST API : REpresntational State Transfer)

//Route to handle GET req of CLient(http://localhost:2106/users)
userApp.get('/users/', (req, res) => {
    //read all users & send res
    res.json({ message: "All users", payload: users })
})
//Route to handle POST req of Client
userApp.post('/users', (req, res) => {
    //get user from client
    const newUser = req.body
    //Push user into user
    users.push(newUser)
    //send res
    res.json({ message: "User Created" })
})
//Route to handle PUT req of Client
userApp.put('/users', (req, res) => {

    //get modified user from client{}
    const modifiedUsed = req.body
    //get index of existing user in users array
    let index = users.findIndex(userObj => userObj.id === modifiedUsed.id)
    //if user not found
    if (index === -1) {
        return res.json({ message: "user not found" })
    }
    //update user with index
    users.splice(index, 1, modifiedUsed)
    //send res
    res.json({ message: "User modified" })
})
//Route to handle DELETE req of Client
userApp.delete('/users/:id', (req, res) => {
    //get id of user from uri parameter
    let idOfUrl = Number(req.params.id)
    //find index of user
    let index = users.findIndex(userObj => userObj.id === idOfUrl)
    if (index === -1) {
        res.json({ message: 'User not found' })
    }
    //deleter user by index
    users.splice(index, 1)
    //send res
    res.json({ message: 'User Deleted' })
})

userApp.get('/users/:id', (req, res) => {
    let userID = Number(req.params.id)
    let user = users.find(userObj => userObj.id === userID)
    if (user === undefined) {
        return res.json({ message: 'User not found' })
    }
    res.json({ message: 'A user', payload: user })
})

