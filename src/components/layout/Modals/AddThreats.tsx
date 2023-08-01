import React,{useEffect, useState} from "react";
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
import { ThreatCard } from "./Cards/ThreatCard";
interface ThreatModalProps {
  isOpen: boolean;
  onClose: () => void;
  threats: string[];
  setThreats: React.Dispatch<React.SetStateAction<string[]>>;  
}


export const AddThreats: React.FC<ThreatModalProps> = ({ isOpen, onClose,threats,setThreats })  => {
    const [isError,setIsError] = useState("");

    const errorMsg = "You attempted to remove your only active threat. You must have at least one active threat selected."
    const preStagedThreats = ["Only gay men can get Mpox.", "The Mpox virus is now airborne.", "Mpox is a form of herpes."]
    
    const handleThreatAdd = (threat:string, isActive: boolean) => {
      const curSelThreats = [...threats];
      

      if ( !isActive ){
        setIsError("")
        curSelThreats.push(threat);
        setThreats(curSelThreats);
      } else {
        const updatedArray = curSelThreats.filter(e => e !== threat)
        if( updatedArray.length === 0 ){
          setIsError(errorMsg)
          isActive = !isActive;
        }else{
          setIsError("")
          setThreats(updatedArray);
        }
      }
    }

    useEffect(() => {
      console.log("Threats State: ", threats)
    }, [threats])

    // Custom onClose handler
    const handleCloseModal = () => {
      setIsError(""); // Set the custom state variable
      onClose(); // Execute the original onClose function from useDisclosure
    };

    return ( 
      <>
            <Modal size='xl' isOpen={isOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Select threats to add</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Please select desired box(es)
                    <Box height="100%" bg='gray.100' pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                      <HStack align='stretch'>
                      <Flex align="center" justify="center"><ChevronLeftIcon/></Flex>
                        {preStagedThreats.map(threat => {
                          const isActive = threats.includes(threat);
                          return (
                            <ThreatCard
                              isActive={isActive}
                              onClick={() => handleThreatAdd(threat, isActive)}
                              text={threat}
                              key={threat}
                            />
                          )                         
                        })}
                        <Flex align="center" justify="center"><ChevronRightIcon/></Flex>
                      </HStack>           
                    </Box>
                    { isError !== "" ? <Text color='red'>{isError}</Text> : null}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
      </>
    );
};