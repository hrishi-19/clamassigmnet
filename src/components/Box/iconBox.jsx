import { Box } from '@chakra-ui/react'
import React from 'react'

function IconBox({radius,child}) {
  return (
    <Box bg='#010100' color='#fff' p={radius==='full'?3:1} borderRadius={radius}>
           {child}
    </Box>
  )
}

export default IconBox
