const Cart = ({ filteredProducts, removeAll }) => {

    const priceTotal = filteredProducts.reduce((valorTotal, valorAtual) => (valorTotal + valorAtual.price), 0)

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