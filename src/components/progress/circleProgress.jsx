import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

function CircleProgress({value}) {
    return (
        <CircularProgress value={value} color='purple.500' size='100px' capIsRound trackColor='#00003'>
            <CircularProgressLabel
                bg='#ff535e' w="60px" h="60px"
                fontSize='md' borderRadius='full'
                fontWeight='700'
                display='flex' justifyContent='center' alignItems='center'
            >{value}%</CircularProgressLabel>
        </CircularProgress>
    )
}

export default CircleProgress
