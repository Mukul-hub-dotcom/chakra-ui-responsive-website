import React from 'react'
import ProductCard from '../components/ProductCard'
import {products} from './data'
import { Heading } from '@chakra-ui/react'
function Home() {
  return (
    <div>
      <Heading>My coffee shop</Heading>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
    {products.map((ele)=>(    
      <div><ProductCard id={ele.id} title={ele.title}desc={ele.description}image={ele.image}price={ele.price}/></div>
      

      
    ))}
    
    </div>
    </div>

    
  )
}

export default Home