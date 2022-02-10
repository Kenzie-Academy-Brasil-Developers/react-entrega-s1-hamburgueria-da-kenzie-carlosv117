import './styles.css'
import ListCart from "../ListCart"
import Cart from "../Cart"
import { useState } from 'react'

const ProductListCart = ({ filteredProducts, setFilteredProducts }) => {

    const remove = (value) => {

        const product = filteredProducts.filter(product => (product.id !== value))
        setFilteredProducts(product)
    }

    const removeAll = () => {
        setFilteredProducts([])
    }

    return (

        <section className="Cart">
            <h2 className='ShoppingCart'>Carrinho de compras</h2>

            {filteredProducts <= 0 ?
                (
                    <div className='emptyCart'>
                        <h3>Sua sacola stá vazia</h3>
                        <p>Adicione itens</p>
                    </div>
                ) :
                (
                    <ul className='container'>
                        {filteredProducts.map(product => <ListCart
                            key={product.id} id={product.id} name={product.name} image={product.img}
                            category={product.category} price={product.price} remove={remove} />)}

                        <Cart filteredProducts={filteredProducts} removeAll={removeAll} />
                    </ul>
                )}

        </section>

    )
}

export default ProductListCart