import './App.css';
import Header from "./components/header"
import ProductHolder from './components/product-holder';

import img from "./biriyani.jpg"

function App() {

  const products=[
    {
      name:"Redmi 11",
      price:17000,
      details:"Nice Phone",
      img:img,
      offer:10
    },

    {
      name:"Samsung A70",
      price:35000,
      details:"Costly Phone",
      img:img,
      offer:20
    },

    {
      name:"Apple iphoe",
      price:50000,
      details:"Brand phone",
      img:img,
      offer:50

    },

    {
      name:"Nokia",
      price:2000,
      details:"one week battery capacity",
      img:img,
      offer:70

    }
  ]

  return (
    <div className="App">
      <Header></Header>
      <ProductHolder prodList={products}></ProductHolder>

    </div>
  );
}

export default App;
