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
                <Box><Text pb="10" fontSize='4xl' color='black'>Generated messages</Text></Box>
                <Box><Button colorScheme='blue'>Download All &nbsp;<DownloadIcon/> </Button></Box>
            </Flex>          
        </>
    );
};