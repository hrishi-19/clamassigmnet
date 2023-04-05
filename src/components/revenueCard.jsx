import { Card, CardBody, Flex, Box, Stack, Text, Progress } from '@chakra-ui/react'
import React from 'react'
import { BiDollar } from 'react-icons/bi'
import IconBox from './Box/iconBox'
import LinearProgress from './progress/linearProgress'

function RevenueCard() {
  return (
    <Card bg="#2c2c2c" borderRadius='3xl' p='3'>
      <CardBody color="#fff" >
        <Flex justifyContent='space-around' alignItems='center'>
          <IconBox radius={'full'} child={<BiDollar size={20}/>}/>
          <Stack w='50%' spacing={3}>
            <Box>
              <Text fontSize='xl'>Total Revenue</Text>
              <Text fontSize='xl' fontWeight={900}>$92,983</Text>
            </Box>
            <LinearProgress
            value={60}
            sx={
              {size:'sm',borderRadius:'sm'}
            }
            />
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default RevenueCard
