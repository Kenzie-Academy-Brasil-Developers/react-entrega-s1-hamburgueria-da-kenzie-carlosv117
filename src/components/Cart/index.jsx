import ProductListCart from '../ProductListCart'

const Cart = ({ filteredProducts }) => {

    const prices = filteredProducts.map(price => price.price)
    const priceTotal = prices.reduce((valorTotal, valorAtual) => (valorTotal + valorAtual), 0)
    console.log(priceTotal.toFixed(2))

    return (
        <div>
            <ProductListCart filteredProducts={filteredProducts} />
            <div>
                <p>Total</p>
                <p>{priceTotal.toFixed(2)}</p>
            </div>
            <div>
                <button>Remover todos</button>
            </div>
        </div>
    )
}

export default Cart