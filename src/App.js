import './App.css';
import {React} from "react"
import ProductsList from "./components/ProductsList"
import {useState, useEffect} from "react"
import Cart from './components/Cart';

function App() {

  const [listProduct, setListProduct] = useState([])

  useEffect(() => {

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(response => response.json())
      .then(response => setListProduct(response))

  },[])

  const showProducts = () =>{

  }

  const handleClick = (productId) => {

  }

  return (
    <div className="App">
      <ProductsList listProduct={listProduct}/>
      <Cart listProduct={listProduct}/>
    </div>
  );
}

export default App;
