import './styles.css'
import Logo from "../../assets/image/Logo.png"

const Header = ({ setSearch, showProducts, listProduct }) => {

    return (

        <header className="Header">
            <figure id='Header__Logo'>
                <img onClick={() => listProduct} src={Logo} alt="Burguer Kenzie" />
            </figure>
            <div className="Pesquisar">
                <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setSearch(event.target.value)} />
                <button onClick={() => showProducts()}>Pesquisar</button>
            </div>
        </header>
    )
}

export default Header