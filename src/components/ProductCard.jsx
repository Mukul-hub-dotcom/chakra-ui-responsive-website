import React from 'react'
import { Heading } from '@chakra-ui/react'

function ProductCard({id,title,desc,image,price}) {
  return (
    <div style={{margin:'10px',padding:'10px',borderRadius:'4px'}}>
       <img style={{height:'15rem',width:'100%'}} src={image} alt="" />
       <Heading as='h5' size='xl' noOfLines={1}>{title}</Heading>
      
        <p>{desc}</p>
        <Heading as='h6' size='l' noOfLines={1}>{price}</Heading>
        
    </div>
  )
}

export default ProductCard