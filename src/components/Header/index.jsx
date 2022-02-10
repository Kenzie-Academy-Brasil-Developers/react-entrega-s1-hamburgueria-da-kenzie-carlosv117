import './styles.css'
const Header = () => {

    return (

        <header className="Header">
            <h1>Burguer<span>Kenzie</span></h1>
            <div className="Pesquisar">
                <input type="text" placeholder="Digitar Pesquisa" />
                <button>Pesquisar</button>
            </div>
        </header>
    )
}

export default Header