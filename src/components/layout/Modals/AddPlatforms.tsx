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
import { PlatformCard } from "./Cards/PlatformCard";
import { platform } from "os";


interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
  platforms: string[];
  setPlatforms: React.Dispatch<React.SetStateAction<string[]>>;
}


export const AddPlatforms: React.FC<PlatformModalProps> = ({ isOpen, onClose,platforms,setPlatforms })  => {
    const [isError,setIsError] = useState("");

    const errorMsg = "You attempted to remove your only active platform. You must have at least one active platform selected."
    const preStagedPlatforms = ["Twitter","Blog Post","Reddit"]
    
    const handlePlatformAdd = (platform:string, isActive: boolean) => {
      const curSelPlatforms = [...platforms];
      

      if ( !isActive ){
        setIsError("")
        curSelPlatforms.push(platform);
        setPlatforms(curSelPlatforms);
      } else {
        const updatedArray = curSelPlatforms.filter(e => e !== platform)
        if( updatedArray.length === 0 ){
          setIsError(errorMsg)
          isActive = !isActive;
        }else{
          setIsError("")
          setPlatforms(updatedArray);
        }
      }
    }

    useEffect(() => {
      console.log("Platform State: ", platforms)
    }, [platforms])

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
                <ModalHeader>Select platform to add</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Please select desired box(es)
                    <Box height="100%" bg='gray.100' pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                      <HStack align='stretch'>
                      <Flex align="center" justify="center"><ChevronLeftIcon/></Flex>
                        {preStagedPlatforms.map(platform => {
                          const isActive = platforms.includes(platform);
                          return (
                            <PlatformCard
                              isActive={isActive}
                              onClick={() => handlePlatformAdd(platform, isActive)}
                              text={platform}
                              key={platform}
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