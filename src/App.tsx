import React from 'react';
import {NavBar} from './components/layout/NavBar/NavBar'
import {Footer} from './components/layout/Footer/Footer'
import {SelectionBar} from './components/layout/SelectionBar/SelectionBar'
import {GeneratedSummary} from './components/layout/GeneratedSummary/GeneratedSummary'
import {Prompt} from './components/layout/Prompt/Prompt'
import { Grid, GridItem, Text, VStack,StackDivider  } from '@chakra-ui/react';

export const App: React.FC = () => {
  return (
    <>
      <Grid
          templateAreas={'"nav nav" "main main" "footer footer"'}
          gridTemplateRows={{ base: '64px 1fr 150px', md: '64px 1fr 64px' }}
          gridTemplateColumns="150px 1fr"
          minHeight="100vh"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem pl="20" pr="20" pt="6" pb="8" area="main">
            <div className="page-layout__content">
              <Text pb="10" fontSize='5xl' color='black'>Generate anti-misinformation messages</Text>
            </div>
            
            <VStack
              spacing={4}
              align='stretch'
            >
              <SelectionBar/>
              <GeneratedSummary/>
              <Prompt/>
            </VStack>
          </GridItem>
          <GridItem pl="2" area="footer">
            <Footer />
          </GridItem>
        </Grid>
    </>
  );
};
