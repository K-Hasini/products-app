// import React from 'react'
import {Link} from 'react-router-dom'
interface Props{
    product : {title : 'string', description:'string', imageSrc: 'string', id:number}
}
export type Product = {
  images: any ,title : 'string', description:'string', imageSrc: 'string', id: number
}

const Card = ({product}:Props) => {
  return ( 
    <Link to = {`/product/${product.id}`} className='card-link'>
    <div className='card'>
        <h2 className='card-title'>{product.title}</h2>
        <div className='card-image'>
            <img src={product.imageSrc} alt={product.title} />
        </div>
        <div className='card-description'>
            <p>
                {product.description.slice(0,100)} ...
            </p>
        </div>
        {/* <div>
            <Link to = {`/product/${product.id}`}className='card-button'>
                Read More
            </Link>
        </div> */}
    </div>
    </Link>
  )
}

export default Card