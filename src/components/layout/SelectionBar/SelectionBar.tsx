import {
    Box,Flex,Tag,TagCloseButton,TagLabel,VStack
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'


interface SelectionBarProps {
    threats:string[];
    audiences:string[];
    platforms:string[];
}
  
export const SelectionBar: React.FC<SelectionBarProps> = ({ threats, audiences, platforms}) => {
    return (
        <Box height="100%" bg='gray.100' pr='55' pb='15' pt='15' border='1px' borderColor='gray.400'>
            <Flex pl="10" pr="10" h='100%' alignItems={'center'} justifyContent={'space-between'}>
                <Box bg='gray.100'>
                    Message should counter all of the following:
                    <br/>
                        <VStack>
                        {threats.map(threat => {
                            return (
                                <Tag size="sm" key={threat} variant='subtle' colorScheme='pink'>
                                    <TagLabel>{threat}</TagLabel>
                                    <TagCloseButton />
                                </Tag>  
                            )
                        })}
                        </VStack>
                    
                </Box>
                <Box bg='gray.100'>
                To:
                <br/>
                        <VStack>
                        {audiences.map(audience => {
                            return (
                                <Tag size="sm" key={audience} variant='subtle' colorScheme='cyan'>
                                    <TagLabel>{audience}</TagLabel>
                                    <TagCloseButton />
                                </Tag>  
                            )
                        })}
                        </VStack>
                </Box>
                <Box bg='gray.100'>
                    On:
                    <br/>
                        <VStack>
                        {platforms.map(platform => {
                            return (
                                <Tag size="sm" key={platform} variant='subtle' colorScheme='yellow'>
                                    <TagLabel>{platform}</TagLabel>
                                    <TagCloseButton />
                                </Tag>  
                            )
                        })}
                        </VStack>               
                </Box>
            </Flex>
        </Box>
    );
};