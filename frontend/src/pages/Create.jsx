import React from 'react';  
import { Box, Flex, Heading, Text, Button, Input, FormLabel, FormControl, Select } from '@chakra-ui/react';  
  
const CreatePost = () => {  
  return (  
   <Box w="80%"  mx="auto" p={6} bg="white" borderRadius="25px" boxShadow="md">  
    <Flex justify="space-between" align="center" direction="column" h="80vh">  
      <Heading size="lg" mb={-100}>Create Post</Heading>  
      <FormControl>  
       <FormLabel>Opportunity Title:</FormLabel>  
       <Input type="text" />  
       <FormLabel>Date:</FormLabel>  
       <Input type="date" />  
       <FormLabel>Duration:</FormLabel>  
       <Select>  
        <option value="15-30 minutes">15-30 minutes</option>  
        <option value="30-1 hour">30-1 hour</option>  
        <option value="1-2 hours">1-2 hours</option>  
        <option value="2-3 hours">2-3 hours</option>  
        <option value="3-4 hours">3-4 hours</option>  
        <option value="4+ hours">4+ hours</option>  
       </Select>  
       <FormLabel>Location:</FormLabel>  
       <Input type="text" />  
       <FormLabel>Category:</FormLabel>  
       <Select>  
        <option value="Tutoring/Education">Tutoring/Education</option>  
        <option value="Setup/Cleanup">Setup/Cleanup</option>  
        <option value="Yardwork/Gardening">Yardwork/Gardening</option>  
        <option value="Community">Community</option>  
        <option value="Disaster Relief">Disaster Relief</option>  
        <option value="Events">Events</option>  
        <option value="Nonprofit">Nonprofit</option>  
       </Select>  
       <FormLabel>Description:</FormLabel>  
       <Input type="text" />  
      </FormControl>  
      <Button mt={-20} alignItems='center'>Submit</Button>  
    </Flex>  
   </Box>  
  );  
};  
  
export default CreatePost;
