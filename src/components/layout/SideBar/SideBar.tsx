import {
    Box,
    Flex,
    Button,

    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react'

import {AddIcon,ChevronDownIcon} from '@chakra-ui/icons'

export const SideBar = () => {
    const { isOpen:threatIsOpen, onOpen:threatOnOpen, onClose:threatOnClose  } = useDisclosure()
    const { isOpen:audienceIsOpen, onOpen:audienceOnOpen, onClose:audienceOnClose  } = useDisclosure()
    const { isOpen:platformIsOpen, onOpen:platformOnOpen, onClose:platformOnClose  } = useDisclosure()

    return (
        <>
            <Box height="100%" bg='gray.100' pr='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
                <Flex pl="10" pr="10" h={16} alignItems={'center'} justifyContent={'space-between'}>
                    Refine Selections
                </Flex>
                <Flex pl="10" pr="10" h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button onClick={threatOnOpen} colorScheme='teal' variant='outline' rightIcon={<AddIcon />}>
                        Add Threats
                    </Button>
                </Flex>
                <Flex width="100%"  pl="10" pr="10" h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button onClick={audienceOnOpen} width="100%" colorScheme='teal'  variant='outline' rightIcon={<ChevronDownIcon /> }>
                        Add audiences
                    </Button>
                </Flex>
                <Flex width="100%" pl="10"  pr="10" h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button onClick={platformOnOpen} width="100%" colorScheme='teal' variant='outline' rightIcon={<ChevronDownIcon />}>
                        Add platforms
                    </Button>
                </Flex>
            </Box>


            <Modal size='xl' isOpen={threatIsOpen} onClose={threatOnClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Threat</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Lorem ipsum lorem ipsum.
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={threatOnClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>


            <Modal size='xl' isOpen={audienceIsOpen} onClose={audienceOnClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Audience</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Lorem ipsum lorem ipsum.
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={audienceOnClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>


            <Modal size='xl' isOpen={platformIsOpen} onClose={platformOnClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Platform</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Lorem ipsum lorem ipsum.
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={platformOnClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};