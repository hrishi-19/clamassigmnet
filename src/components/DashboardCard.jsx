import { Card, CardBody, CardHeader, List, ListItem, ListIcon, Flex, Heading, Text, Box } from '@chakra-ui/react'
import { RiFolderOpenLine } from 'react-icons/ri';
import { MdOutlineMail, MdOutlineCalendarToday, MdGraphicEq, MdOutlineInsertDriveFile } from 'react-icons/md'
import React from 'react'
import IconBox from './Box/iconBox';

function DashboardCard() {
    return (
        <Card bg='#2c2c2c' borderRadius='3xl' py='5' w="100%" h="100%">
            <CardHeader>
                <Heading size='sm' textAlign='center'>
                    <Flex color="#fff" align='center' justifyContent='center' gap='3'>
                        <IconBox radius={'md'}child={ <RiFolderOpenLine size={20} />}/>
                        <Text>Dashboard</Text>
                    </Flex>
                </Heading>
            </CardHeader>
            <CardBody>
                <Flex alignItems='center'>
                    <List color='white' spacing={8} ml='25%'>
                        <ListItem display='flex' alignItems='center' py='1' >
                            <ListIcon as={MdOutlineMail} />
                            <Text>Email</Text>
                        </ListItem>
                        <ListItem display='flex' alignItems='center' py='1'>
                            <ListIcon as={MdOutlineCalendarToday} size='5' />
                            <Text>Calender</Text>
                        </ListItem>
                        <ListItem display='flex' alignItems='center' py='1' >
                            <ListIcon as={MdGraphicEq} />
                            <Text>Graph</Text>
                        </ListItem>
                        <ListItem display='flex' alignItems='center' py='1' >
                            <ListIcon as={MdOutlineInsertDriveFile} />
                            <Text>Forms</Text>
                        </ListItem>
                    </List>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default DashboardCard
