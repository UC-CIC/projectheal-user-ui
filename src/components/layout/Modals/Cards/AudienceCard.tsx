import React from "react";
import {
    Box,
    Text
} from '@chakra-ui/react'

interface AudienceCardProps {
    isActive: boolean;
    onClick: () => void;
    text: string;
  }

  
export const AudienceCard: React.FC<AudienceCardProps> = ({ isActive, onClick, text })  => {
    return(
        <Box onClick={onClick} flex="1"  width='100%' bg={ isActive ? "blue.100":"white"} pr='15' pl='15' pb='15' pt='15' border='1px' borderColor='gray.400'>
            <Text fontSize='sm' color='blue'>Audience</Text>
            <Text fontSize='sm' as='i'>{text}</Text>
        </Box>   
    );
}