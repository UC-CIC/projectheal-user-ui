import {
    Box,Flex,Tag,TagCloseButton,TagLabel
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'

export const SelectionBar = () => {
    return (
        <Box bg='gray.100' pr='55' pb='15' pt='15' border='1px' borderColor='gray.400'>
            <Flex pl="10" pr="10" h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box bg='gray.100'>
                    Message should counter all of the following:
                    <br/>
                    <Tag size="sm" key="sm" variant='subtle' colorScheme='pink'>
                        <TagLabel>Only gay men can get Mpox</TagLabel>
                        <TagCloseButton />
                    </Tag>  
                </Box>
                <Box bg='gray.100'>
                To:
                <br/>
                    <Tag size="sm" key="sm" variant='subtle' colorScheme='cyan'>
                        <TagLabel>General public</TagLabel>
                        <TagCloseButton />
                    </Tag>  
                </Box>
                <Box bg='gray.100'>
                    On:
                    <br/>
                    <Tag size="sm" key="sm" variant='subtle' colorScheme='yellow'>
                        <TagLabel>Twitter</TagLabel>
                        <TagCloseButton />
                    </Tag>                     
                </Box>
            </Flex>
        </Box>
    );
};