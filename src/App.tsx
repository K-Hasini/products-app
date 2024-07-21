import "./App.css"

import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/product" element = {<Products/>}/>
          <Route path = "/product/:id" element = {<ProductDetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App