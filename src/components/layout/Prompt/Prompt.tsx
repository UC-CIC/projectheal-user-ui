import {
    Textarea,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Container,
    Button,Stack
  } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
import { useMutation } from 'react-query';
import Loader from '../../Loader/Loader';
import {
    postPrompt
  } from '../../services/message.service';

const lorem:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


export const Prompt = () => {
    const [promptResponse, setPromptResponse] = useState(lorem);


    //updates to pull via React Query
    const { data: promptData, isLoading: isUpdating, mutate: managePrompt } = useMutation({
        mutationFn: async ( 
            {
                counteract,
                audiences,
                platforms,
                mode,
                previousPrompt,
                prompt,
            }:
            {
                counteract:string[],
                audiences:string[],
                platforms:string[],
                mode:string,
                previousPrompt:string,
                prompt:string
            }
        ) => {
        const { data, error } = await postPrompt(counteract,audiences,platforms,mode,previousPrompt,prompt);
        if (!data && error) throw error;
        return data;
        },
        onSuccess: () => console.log("posted"),
    });

    const defaultPromptResponse = promptData && promptData.length > 0 ? promptData[0] : lorem;

    useEffect(() => {
        //baseline message
        const response = managePrompt(
            {
                counteract:["Only gay men can get Covid"],
                audiences:["General Public"],
                platforms:["Twitter"],
                mode:"baseline",
                previousPrompt:"",
                prompt:""
            }
        );
    }, [])


    const isLoading = isUpdating;

    if (isLoading)
        return (
        <Stack mt="32" align="center">
            <Loader />
        </Stack>
        );
    

    return (
        <> 
            <Container maxW='800px'>
                <Box >
                    <Textarea height="150px" size="lg" isReadOnly variant="filled" value={defaultPromptResponse } />
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