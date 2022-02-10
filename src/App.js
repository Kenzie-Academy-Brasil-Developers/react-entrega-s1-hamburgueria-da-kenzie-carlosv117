import './App.css';
import './reset.css'
import {React} from "react"
import {useState, useEffect} from "react"
import Header from './components/Header';
import ProductsList from "./components/ProductsList"
import ProductListCart from './components/ProductListCart';


function App() {

  const [listProduct, setListProduct] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(response => response.json())
      .then(response => setListProduct(response))

  },[])

  const showProducts = () =>{
    const searchFilter = listProduct.filter(product => 

      product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      product.category.toLowerCase().includes(search.toLocaleLowerCase()))

      setListProduct([...searchFilter])

  }

  const handleClick = (productId) => {

    const checkCard = filteredProducts.find(product => product.id === productId)
    const click = listProduct.find(product => product.id === productId)

    if(filteredProducts <= 0){

      setFilteredProducts([...filteredProducts, click])

    }else if(filteredProducts.includes(checkCard)){

      alert("Não pode adicionar mais de um produto ao carrinho")

    }else{

      setFilteredProducts([...filteredProducts, click])

    }
    
  }

  return (
    <div className="App">
      <Header setSearch={setSearch} showProducts={showProducts} listProduct={listProduct}/>
      <main>

      <ProductsList listProduct={listProduct} handleClick={handleClick}/>
      <ProductListCart filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      
      </main>
    </div>
  );
}

export default App;
