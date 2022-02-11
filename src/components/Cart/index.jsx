const Cart = ({ filteredProducts, removeAll }) => {

    const prices = filteredProducts.map(price => price.price)
    const priceTotal = prices.reduce((valorTotal, valorAtual) => (valorTotal + valorAtual), 0)

    return (
        <div className="priceTotal">
            <div className="total">
                <p>Total</p>
                <span>R$ {priceTotal.toFixed(2)}</span>
            </div>
            <div className="buttonRemove">
                <button onClick={() => removeAll()}>Remover todos</button>
            </div>
        </div>
    )
}

export default Cart