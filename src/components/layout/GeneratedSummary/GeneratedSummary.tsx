import {
    Text, 
    Button,
    Flex,
    Box,
    Tag,TagLabel
  } from '@chakra-ui/react'
import { DownloadIcon,SmallAddIcon } from '@chakra-ui/icons'


export const GeneratedSummary = () => {
    return (
        <>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box><Text pb="10" fontSize='4xl' color='black'>Generated messages</Text></Box>
                <Box><Button colorScheme='blue'>Download All &nbsp;<DownloadIcon/> </Button></Box>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Tag size="sm" key="sm-audience" variant='subtle' colorScheme='cyan'>
                        <TagLabel>General public</TagLabel>
                    </Tag>  
                    &nbsp;&nbsp;&nbsp;
                    <Tag size="sm" key="sm-target" variant='subtle' colorScheme='yellow'>
                        <TagLabel>Twitter</TagLabel>
                    </Tag>  
                </Box>
            </Flex>            
        </>
    );
};