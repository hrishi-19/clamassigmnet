import {
  Card, CardHeader, HStack, Menu,
  MenuButton,
  Spacer,
  Text,
  IconButton,
  CardBody,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import CircleProgress from './progress/circleProgress'

function ProgressCard() {
  return (
    <Card bg='#2c2c2c' borderRadius='3xl' p='2' w="100%" h="100%">
      <CardBody color="#fff">
        <HStack>
          <Text>Project Progress</Text>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<BsThreeDotsVertical size={20} />}
              bg='transparent'
              _hover="none"
            />
          </Menu>
        </HStack>
        <Flex alignItems='center' flexDirection='column' p='2'>
          <CircleProgress value={75}/>
        </Flex>
        <Text p='1'>3 remaing projects</Text>
      </CardBody>
    </Card>
  )
}

export default ProgressCard
