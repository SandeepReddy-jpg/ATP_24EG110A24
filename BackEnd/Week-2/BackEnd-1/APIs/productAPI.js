//Create mini-express productproductApp(Seperate route)
import exp from 'express'
export const productApp = exp.Router()

let products = []
//Route to handle GET req of CLient(http://localhost:2106/products)

//get all the products

productApp.get('/products', (req, res) => {
    res.json({ message: 'Products are:', payload: products })
})

//get product by brand

productApp.get('/products/:brand', (req, res) => {
    let idOfUrl = req.params.brand
    let product = products.filter(productObj => productObj.brand === idOfUrl)
    if (product === undefined) {
        return res.json({ message: 'Product not found' })
    }
    res.json({ message: "The product is ", payload: product })
})

productApp.post('/products', (req, res) => {
    let newProduct = req.body
    products.push(newProduct)
    res.json({ message: 'Product added' })
})

productApp.put('/products', (req, res) => {
    let modifiedProduct = req.body
    let product = products.findIndex(productObj => productObj.productID === modifiedProduct.productID)
    if (product === -1) {
        return res.json({ message: 'Product not found' })
    }
    products.splice(product, 1, modifiedProduct)
    res.json({ message: 'product modifies' })
})

productApp.delete('/products/:productID', (req, res) => {
    let id = Number(req.params.productID)
    let index = products.findIndex(productObj => productObj.productID === id)
    if (index === -1) {
        return res.json({ message: 'Product not found' })
    }
    products.splice(index, 1)
    res.json({ message: 'Product removed' })
})