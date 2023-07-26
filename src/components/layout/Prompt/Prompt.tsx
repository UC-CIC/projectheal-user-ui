import {
    Textarea,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Container,
    Button
  } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const lorem:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


export const Prompt = () => {
    return (
        <> 
            <Container maxW='800px'>
                <Box >
                    <Textarea height="150px" size="lg" isReadOnly variant="filled" placeholder={lorem} />
                    <InputGroup size='md'>
                        <Input
                            
                            pr='4.5rem'
                            placeholder='Ex: Use a friendly tone at a 7th grade reading level, with a 200-400 word count.'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm'>
                             Go
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Container>
        </>
    );
};