import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams(); //destructure otherwise use params.id

    // console.log(params);
    const [data, setData] = useState({title:"", description: "", images:[],price:0, tags : [], reviews :[], brand : "", category:""})
    const getDetailOofProduct = async() => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setData(data);
    }
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255 for Red
        const g = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255 for Green
        const b = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255 for Blue
    
        return `rgb(${r}, ${g}, ${b})`; // Return the color in RGB format
    }
    useEffect(() =>{
        getDetailOofProduct();
    },[]);
  return (
    <>
        {/* Product Details {id} */}
        <div className='product-details'>
            <div className='product-details-image pd-container'>
                <img src = {data.images[0]} alt = {data.title}/>

            </div>
            <div className='product-details-description pd-container'>
                <h1>{data.title}</h1>
                
                <div>
                    {
                        data.tags.map((tag, index) => {
                            return <span style = {{background : getRandomColor(), padding:'5px', color : 'white', cursor : 'pointer', margin : '10px',borderRadius: '5px'}} key = {index} > {tag}</span>
                        })
                    }
                </div>
                <h3>{data.description}</h3>
                <h4>${data.price}</h4>
            </div>
            
        </div>
        
    </>
  )
}

export default ProductDetails