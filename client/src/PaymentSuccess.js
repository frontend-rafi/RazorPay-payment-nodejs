import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function PaymentSuccess() {
   const searchQuary = useSearchParams()[0]
   const refNum = searchQuary.get("reference")
  return (
    <Box>
<VStack>
<Heading textTransform={"uppercase"}>
Order Successful
</Heading>
<Text>

    Reference No :{refNum}
</Text>
</VStack>


    </Box>
  )
}

export default PaymentSuccess