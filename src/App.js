import './App.css';
import './reset.css'
import {React} from "react"
import {useState, useEffect} from "react"
import Header from './components/Header';
import ProductsList from "./components/ProductsList"
import Cart from './components/Cart';


function App() {

  const [listProduct, setListProduct] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(response => response.json())
      .then(response => setListProduct(response))

  },[])

  // const showProducts = () =>{

  // }

  const handleClick = (productId) => {

    setFilteredProducts(...filteredProducts, listProduct.filter(product => product.id === productId))
    

  }
  console.log(filteredProducts)

  return (
    <div className="App">
      <Header/>
      <main>

      <ProductsList listProduct={listProduct} handleClick={handleClick}/>
      <Cart filteredProducts={filteredProducts}/>
      
      </main>
    </div>
  );
}

export default App;
