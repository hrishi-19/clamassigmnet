import {
  Box, CardBody, Flex, Image, Text,Card
} from '@chakra-ui/react'
import React from 'react'
import deginpIC from '../assets/degin.png'
import {MdKeyboardArrowDown} from'react-icons/md'

function ClientCard() {
  return (
    <Card bg='#2c2c2c' borderRadius='3xl' p='5' w="100%" h="100%">
      <CardBody color="#fff">
        <Flex  w="100%" justifyContent='space-between' alignItems='start' flexDirection={{base:'column',md:'row',lg:'row'}}>
          <Image src={deginpIC} alt='deign' boxSize='100px' />
          <Box>
          <Text fontSize={'2xl'} fontWeight='700' p='3'>Dear Client</Text>
          <Text p='3'>Join our online community. It helps in managing your projects.</Text>
          </Box>
          <Box p='3 '><MdKeyboardArrowDown size={20}/></Box>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default ClientCard
