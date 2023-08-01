import {
    Text, 
    Button,
    Flex,
    Box,
    Tag,TagLabel
  } from '@chakra-ui/react'
import React from "react"
import { DownloadIcon,SmallAddIcon } from '@chakra-ui/icons'

interface GeneratedSummaryProps {
    promptAudience: string;
    promptPlatform: string;
}

export const GeneratedSummary: React.FC<GeneratedSummaryProps> = ({promptAudience,promptPlatform}) => { 

    return (
        <>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Tag size="sm" key="sm-audience" variant='subtle' colorScheme='cyan'>
                        <TagLabel>{promptAudience}</TagLabel>
                    </Tag>  
                    &nbsp;&nbsp;&nbsp;
                    <Tag size="sm" key="sm-target" variant='subtle' colorScheme='yellow'>
                        <TagLabel>{promptPlatform}</TagLabel>
                    </Tag>  
                </Box>
            </Flex>            
        </>
    );
};