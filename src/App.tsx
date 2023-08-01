import React, {useState} from 'react';
import {NavBar} from './components/layout/NavBar/NavBar'
import {Footer} from './components/layout/Footer/Footer'
import {SelectionBar} from './components/layout/SelectionBar/SelectionBar'
import {GeneratedSummary} from './components/layout/GeneratedSummary/GeneratedSummary'
import {GeneratedSummaryHeader} from './components/layout/GeneratedSummary/GeneratedSummaryHeader'
import {Prompt} from './components/layout/Prompt/Prompt'
import { Grid, GridItem, Text, VStack,HStack,Container  } from '@chakra-ui/react';
import {SideBar} from './components/layout/SideBar/SideBar'

export const App: React.FC = () => {

  const [threats, setThreats] = useState(["Only gay men can get Covid."]);
  const [platforms, setPlatforms] = useState(["Twitter"]);
  const [audiences, setAudiences] = useState(["General Public"]);

  const promptData = {
      "counteract":["Only gay men can get Covid."],
      "audiences":["General Public"],
      "platforms":["Twitter"],
      "mode":"baseline",
      "previous_prompt":"",
      "prompt":""
  }

  const combos = audiences.flatMap(d => platforms.map(v => d + ";"+ v))
  const promptCounteract = threats;

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
                <SelectionBar
                  threats={threats} 
                  audiences={audiences}
                  platforms={platforms}
                />
                <GeneratedSummaryHeader/>
                {combos.map( (combo,index) => {
                  const targets = combo.split(";");
                  const promptAudience=targets[0];
                  const promptPlatform=targets[1]
                  return(
                    <div key={`key-${index}`}>
                      <GeneratedSummary promptAudience={promptAudience} promptPlatform={promptPlatform}/>
                      <Prompt promptCounteract={promptCounteract} promptAudience={promptAudience} promptPlatform={promptPlatform}/>
                    </div>
                  )
                })}

                </VStack>
              <Container height="100%" width="30%">
                <SideBar 
                  threats={threats} 
                  setThreats={setThreats}
                  audiences={audiences}
                  setAudiences={setAudiences}
                  platforms={platforms}
                  setPlatforms={setPlatforms}
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
