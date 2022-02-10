import ListCart from "../ListCart"

const ProductListCart = ({ filteredProducts }) => {

    return (
        <ul className="Cart">Carrinho de compras
            {filteredProducts.map(product => <ListCart
                key={product.id} id={product.id} name={product.name} image={product.img}
                category={product.category} price={product.price} />
            )}
        </ul>

    )
}

export default ProductListCart