
const Cart = ({ listProduct }) => {

    const prices = listProduct.map(price => price.price)
    const priceTotal = prices.reduce((valorTotal, valorAtual) => (valorTotal + valorAtual), 0)
    console.log(priceTotal.toFixed(2))

    return (
        <h1>oi</h1>
    )
}

export default Cart