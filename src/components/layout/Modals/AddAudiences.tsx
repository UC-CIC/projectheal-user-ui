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
interface AudiencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export const AddAudiences: React.FC<AudiencesModalProps> = ({ isOpen, onClose })  => {
    const [audiences, setAudiences] = useState(["General Public"]);
    const [isError,setIsError] = useState("");

    const errorMsg = "You attempted to remove your only active audience. You must have at least one active audience selected."
    const preStagedAudiences = ["General Public", "Children", "Friend"]
    
    const handleAudienceAdd = (audience:string, isActive: boolean) => {
      const curSelAudiences = [...audiences];
      

      if ( !isActive ){
        setIsError("")
        curSelAudiences.push(audience);
        setAudiences(curSelAudiences);
      } else {
        const updatedArray = curSelAudiences.filter(e => e !== audience)
        if( updatedArray.length === 0 ){
          setIsError(errorMsg)
          isActive = !isActive;
        }else{
          setIsError("")
          setAudiences(updatedArray);
        }
      }
    }

    useEffect(() => {
      console.log("Threats State: ", audiences)
    }, [audiences])

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
                <ModalHeader>Select audiences to add</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Please select desired box(es)
                    <Box height="100%" bg='gray.100' pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                      <HStack align='stretch'>
                      <Flex align="center" justify="center"><ChevronLeftIcon/></Flex>
                        {preStagedAudiences.map(audience => {
                          const isActive = audiences.includes(audience);
                          return (
                            <ThreatCard
                              isActive={isActive}
                              onClick={() => handleAudienceAdd(audience, isActive)}
                              text={audience}
                              key={audience}
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