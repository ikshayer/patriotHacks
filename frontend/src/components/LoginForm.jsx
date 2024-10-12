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
    useToast
  } from '@chakra-ui/react'
import { useState } from 'react'
import { Show, Hide } from '@chakra-ui/react'
import useProfile from '../feed/profiles.jsx'
function LoginForm(){
    const {createProfile} = useProfile()
    
    const toast = useToast()

    const handleSignUp = async() =>{
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        
        const profile ={
            username: username,
            password: password
        }
        const {success, message} = await createProfile(profile)
        if(!success){
            toast({
                title: 'Account not created.',
                description: "We could not create your profile",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        if(success){

        }
    }


    return(
        <>
        <Flex alignContent={"center"} justifyContent={"center"} placeSelf={'center'}> 
            <Container alignItems={'center'}>
                
                
                <Center>
                <Box  bgColor={'#414833'} padding={'20px 10%'} borderRadius={'25px'}>
                <FormControl>
                    <FormLabel fontSize='1rem' color={'#C2C5AA'}>Email address</FormLabel>
                    <Input type='text' fontSize='1rem' color='#C2C5AA' id='username'/>
                    <FormLabel fontSize='1rem' color='#C2C5AA' margin='20px 0px 5px 0px'>Password</FormLabel>
                    <Input type='password' fontSize='1rem' color='#C2C5AA' id='password'/>
                    <FormHelperText fontSize='1rem' color='#C2C5AA' alignContent={"center"} justifyContent={"center"}>We'll never share your email or password.</FormHelperText>

                </FormControl>
                <Button margin='20px' width='300px' alignSelf='center' bgColor={'#B6AD90'}>Submit</Button>
                </Box>
                </Center>
                
                
            </Container>
            </Flex>
        </>
    )
}

export default LoginForm