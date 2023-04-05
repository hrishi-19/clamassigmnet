import { Progress } from '@chakra-ui/react'
import React from 'react'

function LinearProgress({value,sx}) {
  return (
    <Progress colorScheme='purple' value={value} sx={sx} />
  )
}

export default LinearProgress
