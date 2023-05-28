import React from 'react'
import {Image,Text, Button, VStack } from '@chakra-ui/react'


function Card({amount,img,handleCheckout}) {
  return (
   <VStack m={5}>
    <Image src={img}  boxSize={"44"}
    objectFit='cover'  />
    <Text>৳{amount}</Text>
    <Button onClick={()=> handleCheckout(amount)}>Buy Now</Button>
   </VStack>
  )
}

export default Card
