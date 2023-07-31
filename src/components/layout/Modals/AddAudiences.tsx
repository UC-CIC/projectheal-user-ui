import React from "react";
import {
    Button,

    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react'

interface ThreatModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export const AddAudiences: React.FC<ThreatModalProps> = ({ isOpen, onClose })  => {

    return ( 
      <>
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Audience</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Lorem ipsum lorem ipsum.
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
      </>
    );
};