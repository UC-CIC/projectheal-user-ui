import React,{useState} from "react";
import {
    Button,
    Box,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text,
    Flex,
    Checkbox,
    VStack
  } from '@chakra-ui/react'
import {ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'
interface ThreatModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export const AddThreats: React.FC<ThreatModalProps> = ({ isOpen, onClose })  => {
    const [threatOne, setThreatOne] = useState(true);
    const [threatTwo, setThreatTwo] = useState(false);
    const [threatThree, setThreatThree] = useState(false);
    const [threats, setThreats] = useState(["Only gay men can get Mpox"]);


    const preStagedThreats = ["Only gay men can get Mpox.", "The Mpox virus is now airborne.", "Mpox is a form of herpes."]
    
    const handleThreatAdd = (threat:string,setterFunc:any,setterValue:boolean) => {
      const curSelThreats = [...threats];

      if ( !setterValue ){
        curSelThreats.push(threat);
        setThreats(curSelThreats);
      } else {
        setThreats(curSelThreats.filter(e => e !== threat));
      }
      setterFunc(!setterValue);
      console.log(threats)
    }

    return ( 
      <>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Select threats to add</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Lorem ipsum lorem ipsum.
                    <Box height="100%" bg='gray.100' pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                      <HStack align='stretch'>
                      <Flex align="center" justify="center"><ChevronLeftIcon/></Flex>
                        <Box onClick={ ()=>handleThreatAdd(preStagedThreats[0],setThreatOne,threatOne)} flex="1" width='100%' bg={ threatOne ? "blue.100":"white"} pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                            <Text fontSize='sm' color='blue'>Diseases</Text>
                          <Text fontSize='sm' as='i'>{preStagedThreats[0]}</Text>
                        </Box>        
                        <Box onClick={ ()=>handleThreatAdd(preStagedThreats[1],setThreatTwo,threatTwo)} flex="1"  width='100%'  bg={ threatTwo ? "blue.100":"white"} pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                          <Text fontSize='sm' color='blue'>Diseases</Text>
                          <Text fontSize='sm' as='i'>{preStagedThreats[1]}</Text>                       
                        </Box>  
                        <Box onClick={ ()=>handleThreatAdd(preStagedThreats[2],setThreatThree,threatThree)} flex="1"  width='100%' bg={ threatThree ? "blue.100":"white"} pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                          <Text fontSize='sm' color='blue'>Diseases</Text>
                          <Text fontSize='sm' as='i'>{preStagedThreats[2]}</Text>
                        </Box>   
                        <Flex align="center" justify="center"><ChevronRightIcon/></Flex>
                      </HStack>           
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
      </>
    );
};