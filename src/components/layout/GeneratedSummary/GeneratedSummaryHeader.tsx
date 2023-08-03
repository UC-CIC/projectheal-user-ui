import {
    Text, 
    Button,
    Flex,
    Box,
    Tag,TagLabel
  } from '@chakra-ui/react'
import { DownloadIcon,SmallAddIcon } from '@chakra-ui/icons'


export const GeneratedSummaryHeader = () => {
    return (
        <>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box><Text pb="0" fontSize='4xl' color='black'>Generated messages</Text></Box>
                <Box><Button colorScheme='blue'>Download All &nbsp;<DownloadIcon/> </Button></Box>
            </Flex>  
            <Box><Text as='i' pb="10" fontSize='xs' color='red'>Disclaimer: This is an early phase prototype and generated messages are not necessarily reflective of end state.</Text></Box>        
        </>
    );
};