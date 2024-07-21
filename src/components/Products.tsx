import { useEffect, useState } from 'react'
import Card, { Product } from './Card';

const Products = () => {
    const [data,setData] = useState([]);
    const getAllProducts = async() => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setData(data.products);
    }
    useEffect(() => {
      getAllProducts();
    },[]);
  
  return (
    <>
    <h1 style = {{textAlign: 'center'}}>Products</h1>
    <div className='products-container'>
    {/* <button onClick = {getAllProducts}>Click me </button> */}
      {
        data.map((product:Product, index) => {
          // return <p key = {index} > {JSON.stringify(product)}</p>
          return <Card key = {index} product = {{title:product.title, description : product.description, imageSrc : product.images[0], id: product.id}} />
        })
      }
    </div>
    </>

  )
}

export default Products