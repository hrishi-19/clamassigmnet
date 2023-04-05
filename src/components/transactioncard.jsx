import { Avatar,AvatarGroup,Box, Card, CardBody, Stack, Text, Flex, HStack, CardFooter,Button } from '@chakra-ui/react'
import React from 'react'
import{MdArrowRightAlt} from 'react-icons/md'
import IconBox from './Box/iconBox'
import PinkButton from './button/pinkButton'

function Transactioncard() {
  return (
    <Card bg='#2c2c2c' borderRadius='3xl' p='2' w="100%" h="100%">
      <CardBody color="#fff">
        <Flex justifyContent='space-between' alignItems='center' p='2'>
          <Stack>
            <Text fontSize={'2xl'} fontWeight='700'>Transaction Detail</Text>
            <Text>Hi Hira</Text>
          </Stack>
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        </Flex>
        <Flex justifyContent='space-between' alignItems='center' p='2'>
          <Box>
            <Text fontSize={'2xl'} fontWeight='700'>$4,763.40</Text>
            <Text>Available balance</Text>
          </Box>
          <Text>*********54678</Text>
        </Flex>
        <HStack>
        <IconBox radius={'full'}child={ <MdArrowRightAlt size={20} />}/>
          <Box>
            <AvatarGroup size='md' spacing='0.75rem'>
              <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
              <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
              <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </AvatarGroup>
          </Box>
        </HStack>
      </CardBody>
      <CardFooter>
      <Flex justifyContent='flex-end' w="100%">
      <PinkButton child={"Send"}/>
      </Flex>
      </CardFooter>
    </Card>
  )
}

export default Transactioncard
