import React from 'react';  
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
  
const ProfileDisplay = () => {  
  return (  
   <Box w="30%" h="1500%" bg="#f7f7f7" borderRadius="md" boxShadow="3xl" position="absolute" top="0" left="0" right="0" bottom="0" margin="auto" transform="translate(0%, +100%)" pl={6}> 
    <Flex justify="flex-start" align="left" direction="column" h="100%" gap={4} mt={ 8}>  
      <Text fontSize="2xl" color="black">John Doe, 30</Text>  
      <Text fontSize="xl" color="black">Contact Info: 123-456-7890</Text>  
      <Text fontSize="xl" color="black">Location: New York, NY</Text>  
    </Flex>  
    <Flex justify="space-between" align="center" w="100%" pb={0} transform="translate(-2%, -220%)" >  
        <Button variant="link" colorScheme="blue" leftIcon={<FaEdit size ={27} />}>  
        Edit  
      </Button> 
      <Button variant="solid" colorScheme="red" className="delete-button">  
       Delete  
      </Button> 
    </Flex>  
   </Box>  
  );  
};  
  
export default ProfileDisplay;
