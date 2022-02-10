import Lixeira from "../../assets/image/Lixeira.png"

const ListCart = ({ id, name, image, category, remove }) => {

    return (

        <li className="listCart" id={id}>

            <div className="listCartName">
                <figure>
                    <img className="imagemVitrine" src={image} alt={name} />
                </figure>
                <div>
                    <h3>{name}</h3>
                    <p>{category}</p>
                </div>
            </div>
            <figure id="lixeira">
                <img onClick={() => remove(id)} src={Lixeira} alt="Lixeira" />
            </figure>

        </li>

    );
}

export default ListCart;