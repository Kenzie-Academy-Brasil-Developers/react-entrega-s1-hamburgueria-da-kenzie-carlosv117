import Product from "../Product"
import "../Product/styles.css"
const ProductsList = ({ listProduct, handleClick, teste }) => {

    return (


        <ul className="ProductList">
            {listProduct.map(product =>
                <Product key={product.id} id={product.id} name={product.name} image={product.img}
                    category={product.category} price={product.price} handleClick={handleClick} />)
            }
        </ul>

        // <ul className="ProductList">

        //     {listProduct <= 0 ?
        //         (
        //             teste.map(product =>
        //                 <Product key={product.id} id={product.id} name={product.name} image={product.img}
        //                     category={product.category} price={product.price} handleClick={handleClick} />)
        //         ) :
        //         (
        //             listProduct.map(product => <Product key={product.id} id={product.id} name={product.name} image={product.img}
        //                 category={product.category} price={product.price} handleClick={handleClick} />)
        //         )}
        // </ul>

    )
}

export default ProductsList