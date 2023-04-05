import { Box, Text, Center, Flex } from '@chakra-ui/react'
import React from 'react'

function DateBox({ date, month, active }) {
  return (

    <Box bg={active?'#ff535e':'#0003'} borderRadius='2xl' color="#fff" py='6'>
      <Center>
        <Flex flexDirection='column' alignItems='center' justifyContent='space-evenly'>
          <Text fontWeight='700' fontSize='3xl'>{date}</Text>
          <Text>{month}</Text>
        </Flex>
      </Center>
    </Box>
  )
}

export default DateBox
