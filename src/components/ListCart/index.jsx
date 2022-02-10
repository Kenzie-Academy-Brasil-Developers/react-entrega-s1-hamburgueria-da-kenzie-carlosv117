
const ListCart = ({ id, name, image, category }) => {

    return (
        <li id={id}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div ListCart__Text>
                <div>
                    <h2>{name}</h2>
                    <p>{category}</p>
                </div>
                <button>Remover</button>
            </div>

        </li>
    );
}

export default ListCart;