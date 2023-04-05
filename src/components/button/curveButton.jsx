import { Button } from '@chakra-ui/react'
import React from 'react'

function CurveButton({child}) {
  return (
    <Button borderBottomRadius='full' borderTopLeftRadius='full' bg="#000003" _hover='none'>{child}</Button>
  )
}

export default CurveButton
