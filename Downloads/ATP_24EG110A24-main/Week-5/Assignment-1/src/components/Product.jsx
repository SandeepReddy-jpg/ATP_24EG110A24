function Product(props) {
  //State
  const { productObj } = props
  //Return a react element
  return (
    <div className="border-2 p-4 rounded-4xl ">
      <h2 className="text-2xl align-middle font-bold text-black">{productObj.title}</h2>
      <p className="font-bold">{productObj.price}</p>
      <p className="font-mono">{productObj.description}</p>
    </div>
  )
}

export default Product
