import './styles.css'

const Product = ({ id, name, image, category, price, handleClick }) => {

    return (

        <li className="ListCart" id={id}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="ListCart__Text">
                <h1>{name}</h1>
                <span>{category}</span>
                <p>R$ {price.toFixed(2)}</p>
                <button onClick={() => handleClick(id)}>Adicionar</button>
            </div>
        </li>

    )
}

export default Product