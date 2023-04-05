import {
  Card, CardHeader, HStack, Menu,
  MenuButton,
  Spacer,
  Text,
  IconButton,
  Box,
  CardBody,

} from '@chakra-ui/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import LinearProgress from './progress/linearProgress'

function ProjectDetail() {
  return (
    <Card bg='#2c2c2c' borderRadius='3xl' p='2' w="100%" h="100%">
      <CardHeader color="#fff">
        <HStack>
          <Text>Project Details</Text>
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
        <Text color="#ff535e" fontSize='lg' fontWeight={700}>Hira R.</Text>
        <Text>UI/UX Designer</Text>
      </CardHeader>
      <CardBody color="#fff">
        <Box>
          <Text fontSize='md' fontWeight={700}>Project Progress</Text>
          <Text textAlign='end' fontWeight={900}>75%</Text>
          <LinearProgress
            value={75}
            sx={
              { borderRadius: 'xl', size: 'sm' }
            }
          />
        </Box>
      </CardBody>
    </Card>
  )
}

export default ProjectDetail
