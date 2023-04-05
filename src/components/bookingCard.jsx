import { Card, CardBody, CardHeader, Grid, GridItem, HStack, Spacer, Switch, Text } from '@chakra-ui/react'
import React from 'react'
import DateBox from './Box/dateBox'
import { dateData } from '../data/data'


function BookingCard() {
  const dates = dateData
  return (
    <Card bg='#2c2c2c' borderRadius='3xl' p='5' w="100%" h="100%">
      <CardHeader>
        <HStack>
          <Text color='#fff' fontWeight='700' fontSize='xl'>Free Slots Available</Text>
          <Spacer />
          <Switch size='md' colorScheme='purple' isChecked />
        </HStack>
      </CardHeader>
      <CardBody>
        <Grid templateRows='repeat(2,1fr)' templateColumns='repeat(3,1fr) ' gap={5}>
          {dates.map(item => {
            return (
              <GridItem rowSpan={1} colSpan={1}>
                <DateBox active={item.active} date={item.date} month={item.month} /></GridItem>
            )
          })}
        </Grid>
      </CardBody>
    </Card>
  )
}

export default BookingCard
