import './App.css';
import './reset.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {React} from "react"
import {useState, useEffect} from "react"
import Header from './components/Header';
import ProductsList from "./components/ProductsList"
import ProductListCart from './components/ProductListCart';


function App() {

  const [listProduct, setListProduct] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("")
  const [searchRunning, setSearchRunning] = useState([])
  const [checking, setChecking] = useState(true)


  useEffect(() => {

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(response => response.json())
      .then(response => setListProduct(response))

  },[])

  const Logo = () => {

    setChecking(true)
  }

  const Running = () => {
    setSearchRunning([...listProduct])
  }

  const showProducts = () =>{
    Running()

    const searchFilter = listProduct.filter(product => 
      product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) ||
      product.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))

      if(searchFilter <=0 || searchFilter === []){
        setChecking(false)
        setSearchRunning([...listProduct])
      }else{
        setChecking(false)
        setSearchRunning([...searchFilter])
      }

  }

  const handleClick = (productId) => {

    const checkCard = filteredProducts.find(product => product.id === productId)
    const click = listProduct.find(product => product.id === productId)

    if(filteredProducts <= 0){

      setFilteredProducts([...filteredProducts, click])

    }else if(filteredProducts.includes(checkCard)){

      // alert("Não pode adicionar mais de um produto ao carrinho")
      toast.error("Não pode adicionar o mesmo produto duas vezes", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    }else{

      setFilteredProducts([...filteredProducts, click])

    }
    
  }

  return (
    <div className="App">
      
      <Header setSearch={setSearch} showProducts={showProducts} listProduct={listProduct} Logo={Logo}/>
      <main>

      {checking ? 

        (
          <section>
          <ProductsList listProduct={listProduct} handleClick={handleClick}/>
          <ToastContainer />
          </section>
        ):
        (
          <section>
          <ProductsList listProduct={searchRunning} handleClick={handleClick}/>
          <ToastContainer />
          </section>
        )}
      
      <ProductListCart filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      
      </main>
    </div>
  );
}

export default App;
