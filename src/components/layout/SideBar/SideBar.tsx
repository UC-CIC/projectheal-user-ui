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
import { AddThreats } from '../Modals/AddThreats'
import { AddAudiences } from '../Modals/AddAudiences'
import { AddPlatforms } from '../Modals/AddPlatforms'

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

            <AddThreats isOpen={threatIsOpen} onClose={threatOnClose} />
            <AddAudiences isOpen={audienceIsOpen} onClose={audienceOnClose} />
            <AddPlatforms isOpen={platformIsOpen} onClose={platformOnClose} />

        </>
    );
};