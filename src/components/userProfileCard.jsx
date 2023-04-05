import { Card, CardBody, CardHeader, Stack, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function UserProfile({ name, title, projects, revenue }) {
  return (
    <Card bg='#2c2c2c' borderRadius='3xl' p='4'>
      <CardHeader>
        <Stack>
          <Text color='#d35259' fontSize='2xl' fontWeight='700'>{name}</Text>
          <Text color='gray.200' fontSize='md'>{title}</Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <Flex justifyContent='space-between' color='#fff'>
          <Stack>
            <Text fontWeight='900' textAlign='center'>{projects}</Text>
            <Text textAlign='center'>Projects</Text>
          </Stack>
          <Stack>
            <Text fontWeight='900' textAlign='center'>${revenue}</Text>
            <Text textAlign='center'>Revenue</Text>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default UserProfile
