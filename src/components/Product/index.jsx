import handleClick from "../../App"
const Product = ({ id, name, image, category, price }) => {

    handleClick(id)

    return (
        <li id={id}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div>
                <h1>{name}</h1>
                <span>{category}</span>
                <p>{price.toFixed(2)}</p>
                <button></button>
            </div>
        </li>
    )
}

export default Product