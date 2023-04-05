import { Badge } from '@chakra-ui/react'
import React from 'react'

function UtilityBadge({active ,child}) {
    const badgeScheme = {
        bg: "#000003",
        px: '5',
        py:'1',
        borderRadius: 'xl',
        color: '#fff',
        fontWeight: '300',
        mt: 3
    }
    const activebadgeScheme = {
        variant: 'solid',
        bg: "#3826b0",
        px: '5',
        py:'1',
        color: '#fff',
        borderRadius: 'xl',
        fontWeight: '300',
        mt: 3
    }
  return (
    <Badge sx={active?activebadgeScheme:badgeScheme}>{child}</Badge>
  )
}

export default UtilityBadge
