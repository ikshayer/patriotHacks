import React from 'react';  
import { Box, Flex, Heading, Text, Button, Input, FormLabel, FormControl, Select } from '@chakra-ui/react';  
  
const CreatePost = () => {  
  return (  
   <Box w="80%" mx="auto" p={4} bg="white" borderRadius="md" boxShadow="md">  
    <Flex justify="space-between" align="center" direction="column" h="100vh">  
      <Heading size="lg">Create Post</Heading>  
      <FormControl>  
       <FormLabel>Opportunity Title:</FormLabel>  
       <Input type="text" />  
       <FormLabel>Date:</FormLabel>  
       <Input type="date" />  
       <FormLabel>Duration:</FormLabel>  
       <Input type="text" />  
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
      <Button>Submit</Button>  
    </Flex>  
   </Box>  
  );  
};  
  
export default CreatePost;
