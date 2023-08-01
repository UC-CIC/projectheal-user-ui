import React, {useState} from 'react';
import {NavBar} from './components/layout/NavBar/NavBar'
import {Footer} from './components/layout/Footer/Footer'
import {SelectionBar} from './components/layout/SelectionBar/SelectionBar'
import {GeneratedSummary} from './components/layout/GeneratedSummary/GeneratedSummary'
import {Prompt} from './components/layout/Prompt/Prompt'
import { Grid, GridItem, Text, VStack,HStack,Container  } from '@chakra-ui/react';
import {SideBar} from './components/layout/SideBar/SideBar'

export const App: React.FC = () => {
  const promptData = {
      "counteract":["Only gay men can get Covid"],
      "audiences":["General Public"],
      "platforms":["Twitter"],
      "mode":"baseline",
      "previous_prompt":"",
      "prompt":""
  }
  const [threats, setThreats] = useState<string[]>(["Only gay men can get Mpox."]);

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
            
            <HStack alignItems="flex-start" height="100%">
                <VStack
                spacing={4}
                align='stretch'
                width="70%"
              >
                <SelectionBar/>
                <GeneratedSummary/>
                <Prompt/>
                </VStack>
              <Container height="100%" width="30%">
                <SideBar 
                  threats={threats} 
                  setThreats={setThreats} 
                />
              </Container>
            </HStack>
           
          </GridItem>
          <GridItem area="footer">
            <Footer />
          </GridItem>
        </Grid>
    </>
  );
};
