import React from "react";
import {
    Box,
    Text
} from '@chakra-ui/react'

interface ThreatCardProps {
    isActive: boolean;
    onClick: () => void;
    text: string;
  }

  
export const ThreatCard: React.FC<ThreatCardProps> = ({ isActive, onClick, text })  => {
    return(
        <Box onClick={onClick} flex="1"  width='100%' bg={ isActive ? "blue.100":"white"} pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
            <Text fontSize='sm' color='blue'>Diseases</Text>
            <Text fontSize='sm' as='i'>{text}</Text>
        </Box>   
    );
}