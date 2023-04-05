import { Avatar, AvatarGroup, Badge, Card, CardBody, Flex, Stack, Text,Box } from '@chakra-ui/react'
import React from 'react'
import UtilityBadge from './Badge/utilityBadge'

function UtilityCard({title,crubmsg}) {
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
        <Card bg="#2c2c2c" borderRadius='3xl' color="#fff">
            <CardBody color="#fff" >
                <Stack spacing={1}>
                    <Text fontSize='xl' fontWeight='700'>{title}</Text>
                    <Text fontSize='sm' fontWeight='400'>{crubmsg}</Text>
                    <Text fontSize='11px' fontWeight='400'>Seen by</Text>
                    <Box>
                    <AvatarGroup size='sm' max={4}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>
                    </Box>
                    <Flex flexWrap='wrap' justifyContent='space-between' py='3'>
                        <UtilityBadge active={true} child={'Tour'}/>
                        <UtilityBadge active={false} child={'Trip'}/>
                        <UtilityBadge active={false} child={'Transport'}/>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default UtilityCard
