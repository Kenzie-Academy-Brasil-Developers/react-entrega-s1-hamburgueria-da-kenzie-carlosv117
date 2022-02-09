import Product from "../Product"
const ProductsList = ({ listProduct }) => {

    console.log(listProduct)
    return (
        <ul>
            {listProduct.map(product =>
                <Product key={product.id} id={product.id} name={product.name} image={product.img} category={product.category} price={product.price} />)}
        </ul>

    )
}

export default ProductsList