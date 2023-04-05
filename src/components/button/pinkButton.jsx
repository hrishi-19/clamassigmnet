import { Button } from '@chakra-ui/react'
import React from 'react'

function PinkButton({child}) {
  return (
    <Button bg='#ff535e' color="#fff" borderRadius='2xl' px='10' _hover='none'>{child}</Button>
  )
}

export default PinkButton
