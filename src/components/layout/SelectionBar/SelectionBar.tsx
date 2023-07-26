import {
    Box,Badge,Flex
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'

export const SelectionBar = () => {
    return (
        <Box bg='gray.100' pr='55' pb='15' pt='15' border='1px' borderColor='gray.400'>
            <Flex pl="10" pr="10" h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box bg='gray.100'>
                    Messages should counter all of the following:
                    <br/>
                        <Badge colorScheme='pink'>Only gay men can get Mpox</Badge>
                    
                </Box>
                <Box bg='gray.100'>
                To:
                <br/>
                    <Badge colorScheme='cyan'>General public</Badge>
                
                </Box>
                <Box bg='gray.100'>
                    On:
                    <br/>
                        <Badge colorScheme='yellow'>Twitter</Badge>
                    
                </Box>
            </Flex>
        </Box>
    );
};