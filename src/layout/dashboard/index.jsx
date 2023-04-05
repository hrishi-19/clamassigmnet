import { Grid, GridItem, SimpleGrid, Flex } from '@chakra-ui/react'
import React from 'react'
import UserProfile from '../../components/userProfileCard'
import DashboardCard from '../../components/DashboardCard'
import Procard from '../../components/proCard'
import RevenueCard from '../../components/revenueCard'
import ClientCard from '../../components/clientCard'
import UtilityCard from '../../components/utiltyCard'
import Transactioncard from '../../components/transactioncard'
import BookingCard from '../../components/bookingCard'
import ProjectDetail from '../../components/projectDetail'
import ProgressCard from '../../components/progressCard'

function DashBoard() {
  return (
    <SimpleGrid columns={{ base: 1, md: 9, lg: 9 }} gap={6} >
      <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>
        <SimpleGrid rows='7' spacing={6}>
          <GridItem rowSpan={2}>
            <UserProfile name={'Hira R.'} title={'UX/UI Designer'} projects={125} revenue={124} />
          </GridItem>
          <GridItem rowSpan={3} >
            <DashboardCard />
          </GridItem>
          <GridItem rowSpan={2}>
            <Procard />
          </GridItem>
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 3, lg: 3 }}>
        <SimpleGrid rows='6' spacing={6}>
          <GridItem rowSpan={1}><RevenueCard /></GridItem>
          <GridItem rowSpan={2} alignSelf='center'>
            <Flex justifyContent='space-evenly' gap={3}>
              <UtilityCard title={'Travel'} crubmsg={'Mobile Application'} />
              <UtilityCard title={'Hotel'} crubmsg={'Dashboard'} />
            </Flex>
          </GridItem>
          <GridItem rowSpan='3' ><BookingCard /></GridItem>
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 4, lg: 4 }}>
        <SimpleGrid rows='6' spacing={6}>
          <GridItem rowSpan={1}><ClientCard /></GridItem>
          <GridItem rowSpan={3}><Transactioncard /></GridItem>
          <GridItem rowSpan={2}>
            <Flex justifyContent='space-evenly' gap={3}>
              <ProjectDetail />
              <ProgressCard />
            </Flex>
          </GridItem>
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>





  )
}

export default DashBoard
