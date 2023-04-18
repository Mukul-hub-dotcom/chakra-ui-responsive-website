import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
function Contact() {
  const navigate=useNavigate()
  return (
    <Heading>Hiii!!!! Do you love Cofeee <Button colorScheme='blue'onClick={()=>navigate('/')}>Click me</Button> </Heading>
    
  )
}

export default Contact