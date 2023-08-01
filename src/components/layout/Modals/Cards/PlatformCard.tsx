import React from "react";
import {
    Box,
    Text
} from '@chakra-ui/react'

interface PlatformCardProps {
    isActive: boolean;
    onClick: () => void;
    text: string;
  }

  
export const PlatformCard: React.FC<PlatformCardProps> = ({ isActive, onClick, text })  => {
    return(
        <Box onClick={onClick} flex="1"  width='100%' bg={ isActive ? "blue.100":"white"} pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
            <Text fontSize='sm' color='blue'>Platform</Text>
            <Text fontSize='sm' as='i'>{text}</Text>
        </Box>   
    );
}