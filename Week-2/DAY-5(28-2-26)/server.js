//create http server
import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

//set a port number
const port=3000
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening to port ${port}...`))

//create API=(REST API(SPECIALIZED))-representational state transfer)
// structure of route-
  //app.method(path,request handler)
  //app-express,router object

//test data(replace with database)
let users=[]

  //route to handele GET req of client-ex:('https://localhost:3000/users)-(rest user apis only take nouns as url path)
  app.get('/users',(req,res)=>{
    res.json({message:"all users",payLoad:users})
  
  })
  //route to handle POST req of client
  app.post('/users',(req,res)=>{
    //get user from client
    const newuser=req.body
   //push user into users
   users.push(newuser)
   //send res
   res.json({message:"user created"})
  })
  //route to handle PUT req of client
  app.put('/users',(req,res)=>{
   // get modified user from element
   let modifieduser=req.body;
   //get index of existing user in users array
   let index=users.findIndex(userobj=>userobj.id==modifieduser.id)
   if(index==-1){
    return res.json({message:'user not found'})
   }
   // update user with index
  users.splice(index,1,modifieduser)
  res.json({message:"user modified"})
  })
  //route to handle DELETE req of client
  app.delete('/users/:id',(req,res)=>{
   // get id of user from url parameter
    let idofurl=Number(req.params.id) //{id:'5'}
    let index=users.findIndex(userobj=>userobj.id==idofurl)
      if(index==1){
       return res.json({message:"user not found"})
      }
      users.splice(index,1)
      res.json({message:"user removed"})
    
  })

  app.get("/users/:id",(req,res)=>{
    let userid=Number(req.params.id)
    let user=users.find(userobj=>userobj.id==userid)
    if(user==undefined){
      return res.json({message:"user not found"})
    }
    else{
      return res.json({message:"user found",payLoad:user})
    }
  }
  )
  //get and delete request does not support body of request object,so that these two request can send data through endpoint.
  //post request  should send data to the api as body of the request object

//create product API with below operations
// create new product(product id,name,brand,price)
//read all products
//read all products by brand
// update a product
//delete a product by id
let products=[]

 app.get('/products',(req,res)=>{
    res.json({message:"all products avaliable",payLoad:products})
  
  })

app.post('/products',(req,res)=>{
    //get product from client
    const newproduct=req.body
   //push product into users
   products.push(newproduct)
   //send res
   res.json({message:"product created"})
  })

  
app.put('/products', (req, res) => {
  let modifiedproduct = req.body;

  let index = products.findIndex(
    productobj => productobj.id == modifiedproduct.id
  );

  if (index == -1) {
    return res.status(404).json({ message: 'product not found' });
  }

  products.splice(index, 1, modifiedproduct);

  res.json({ message: "product data is modified" });
});

app.delete('/products/:id', (req, res) => {

  let idofpro = Number(req.params.id);

  let index = products.findIndex(
    productobj => productobj.id == idofpro
  );

  if (index == -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products.splice(index, 1);

  res.json({ message: "product removed" });

});
 
app.get('/products/brand/:brand', (req, res) => {

  let brandName = req.params.brand;

  let filteredProducts = products.filter(
    productobj => productobj.brand.toLowerCase() === brandName.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return res.status(404).json({ message: "No products found for this brand" });
  }

  res.json(filteredProducts);

});










