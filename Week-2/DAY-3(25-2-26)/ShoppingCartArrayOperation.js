const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Filter only those products which are currently available in stock
let instockproduct=cart.filter(cartobj=>cartobj.inStock==true)
console.log(instockproduct)

// Transform the cart array to generate new values based on product name and total price (price × quantity)
let newarray=cart.map(cartobj=>{
    return cartobj.name,cartobj.price*cartobj.quantity
})
console.log(newarray)

// Calculate the overall cart value by accumulating product prices
let grandtotal=cart.reduce((acc,cartobj)=>acc+cartobj.price,0)
console.log(grandtotal)

// Retrieve the complete details of the product named "Mouse"
let findmouse=cart.find(cartobj=> cartobj.name=='Mouse')
console.log(findmouse)

// Find the index position of the product named "Keyboard" in the cart array
let index=cart.findIndex(cartobj=>cartobj.name=="Keyboard")
console.log(index)