import { Card, Flex, Stack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CurveButton from './button/curveButton'

function Procard() {
  return (
    <Card bg='#3826b0' borderRadius='3xl' p='4' color="#dee1e3">
      <Flex justifyContent='center' alignItems='center'>
        <Stack w='100%' >
          <Heading size='lg' textAlign='center'>Go Pro</Heading>
          <Text fontSize='md' fontWeight='500' pl='25%'>Upgrade your plan to get pro benifits.</Text>
          <Flex justifyContent='flex-end' p='3'>
           <CurveButton child={"Let's Start"}/>
          </Flex>
        </Stack>
      </Flex>
    </Card>
  )
}

export default Procard
