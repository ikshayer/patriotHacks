import React from 'react';  
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Container,
    Button,
    Box,
    Center,
    Flex,
    useToast,
    useDisclosure,
    Text,
    HStack,
    Link
  } from '@chakra-ui/react'

import { useJobFeed } from '../feed/jobs';
  
const CreatePost = () => { 
    const toast = useToast()
    
    const {createJobs} = useJobFeed()
    const handleCreateJob = async () =>{
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const location = document.getElementById('location').value
        const duration = document.getElementById('duration').value
        const description = document.getElementById("description").value
        const contact = document.getElementById('contact').value


        const newJob = {
            title: title,
            author: author,
            location: location,
            time: duration,
            description: description,
            contactInfo: contact
        }

        const {success, message} = await createJobs(newJob)
        if(!success){
            toast({
                title: 'Error creating post',
                description: "There was an error",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        if(success){
            toast({
                title: 'Post created',
                description: "Your post was created",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            /*
            document.getElementById('title').value = ''
            document.getElementById('author').value = ''
            document.getElementById('location').value = ''
            document.getElementById('duration').value = ''
            document.getElementById("description").value = ''
            document.getElementById('contact').value = ''
            */

        }
        console.log('Success:', success)
        console.log('Message', message)
    }
  return (
    <Flex alignContent={"center"} justifyContent={"center"} placeSelf={'center'} margin={'20px'}> 
            <Container alignItems={'center'} textAlign={'center'}>
                
                
                <Center>
                <Box  bgColor={'#414833'} padding={'20px 10%'} borderRadius={'25px'} id='authForm' w={'800px'}>
                <FormControl>
                    <FormLabel fontSize='1.5rem' fontWeight='bold' color={'black'}>Title</FormLabel>
                    <Input type='text' fontSize='1rem' color='#582F0E' bgColor={'#A4AC86'} fontWeight={'bold'} id='title'/>
                    <FormLabel fontSize='1.5rem' fontWeight='bold' color='black' margin='20px 0px 5px 0px' >Author</FormLabel>
                    <Input type='text' fontSize='1rem' color='#582F0E'  bgColor={'#A4AC86'} fontWeight={'bold'} id='author'/>
                    <FormLabel fontSize='1.5rem' fontWeight='bold' color='black' margin='20px 0px 5px 0px'>Date</FormLabel>
                    <Input type='text' fontSize='1rem' color='#582F0E' bgColor={'#A4AC86'} fontWeight={'bold'} id='duration'/>
                    <FormLabel fontSize='1.5rem' fontWeight='bold' color='black' margin='20px 0px 5px 0px'>Location</FormLabel>
                    <Input type='text' fontSize='1rem' fontWeight='bold' color='#582F0E' bgColor={'#A4AC86'} id='location'/>
                    <FormLabel fontSize='1.5rem' fontWeight='bold' color='black' margin='20px 0px 5px 0px'>Email address</FormLabel>
                    <Input type='email' fontSize='1rem' fontWeight='bold' color='#582F0E' bgColor={'#A4AC86'} id='contact'/>
                    <FormLabel fontSize='1.5rem' fontWeight='bold' color='black' margin='20px 0px 5px 0px'>Description</FormLabel>
                    <Input type='text' fontSize='1rem' fontWeight='bold' color='#582F0E' bgColor={'#A4AC86'} id='description'/>
                    
                    
                    

                </FormControl>
                <Button m='40px 0 30px 0' width='300px' alignContent='center' bgColor={'#A4AC86'} onClick={() => handleCreateJob()}>Create Job</Button>
                
                </Box>
                </Center>
                </Container>
                </Flex>
    /*  
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
 */  
  );  
};  
  
export default CreatePost;