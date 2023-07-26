import {
    Text, 
    Button,
    Flex,
    Box,
    Tag,TagLabel
  } from '@chakra-ui/react'
  import { DownloadIcon,SmallAddIcon } from '@chakra-ui/icons'
  import { ReactNode } from 'react'

export const GeneratedSummary = () => {
    return (
        <>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box><Text pb="10" fontSize='4xl' color='black'>Generate anti-misinformation messages</Text></Box>
                <Box><Button colorScheme='blue'>Download All &nbsp;<DownloadIcon/> </Button></Box>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Tag size="sm" key="sm" variant='subtle' colorScheme='cyan'>
                        <TagLabel>General public</TagLabel>
                    </Tag>  
                    &nbsp;&nbsp;&nbsp;
                    <Tag size="sm" key="sm" variant='subtle' colorScheme='yellow'>
                        <TagLabel>Twitter</TagLabel>
                    </Tag>  
                </Box>
            </Flex>            
        </>
    );
};