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

import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import { Show, Hide } from '@chakra-ui/react'
import useProfile from '../feed/profiles.jsx'
import { Fade, ScaleFade, Slide, SlideFade, Collapse, Select} from '@chakra-ui/react'


function LoginForm(){
    const { isOpen, onOpen } = useDisclosure()
    const {profiles, createProfiles, updateProfile, fetchProfiles} = useProfile()
    const [p, setProfile] = useState({
        username: '',
        setProfile: ''
    })
    
    useEffect(() => {
        fetchProfiles()
    }, [fetchProfiles])


    const toast = useToast()

    const initialClick = () =>{
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        setProfile({
            username: username,
            password: password
        })
        const form = document.getElementById('authForm')
        form.style.display = 'none'
            onToggle()
    }


    const handleLogIn = async () =>{
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const usernameHere = profiles.filter(x => (x.username === username))
        console.log(usernameHere)
        if(username !== usernameHere){
            toast({
                title: 'Wrong username',
                description: "Please type the right username",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        else if(password !== usernameHere.password ){
            toast({
                title: 'Wrong password',
                description: "Type the right password",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        else{
        Cookie.set('username', username, {expires: 1, sameSite: 'strict'})
        window.location.href='/profile'
        }
        
    }

    const handleSignUp = async() =>{
        const {username, password} = p
        const age = document.getElementById('age').value
        const location = document.getElementById('location').value
        const contactDetail = document.getElementById("contactDetail").value
        
        const profile ={
            username: username,
            password: password,
            age: age,
            location: location,
            contactDetail: contactDetail
        }

        const usernameHere = profiles.filter(x => (x.username != username))
        if(usernameHere.username){
            toast({
                title: 'Account already exists',
                description: "Please log in instead",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        else{
        const {success, message} = await createProfiles(profile)
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
            toast({
                title: 'Account created.',
                description: "Your account was created",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            
            Cookie.set('username', username, {expires: 1, sameSite: 'strict'})
            window.location.href='/profile'
        }

        console.log('Success:', success)
        console.log('Message:', message)
    }

    }
    /*
    const handleModify = async () =>{
        const age = document.getElementById('age').value
        const location = document.getElementById('location').value
        const contactDetail = document.getElementById("contactDetail").value

        const updatedProfile = {
            age: age,
            location: location,
            contactDetail: contactDetail
        }

        const {success, message} = await updateProfile(checkProfile)
        if(!success){
            toast({
                title: 'Account not updated.',
                description: "We could not update your profile",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        if(success){
            toast({
                title: 'Account updated.',
                description: "Your profile was successfully updated",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        console.log('Success:', success)
        console.log("Message:", message)

    }
    */

    return(
        <>
        <Flex alignContent={"center"} justifyContent={"center"} placeSelf={'center'} margin={'20px'}> 
            <Container alignItems={'center'}>
                
                
                <Center>
                <Box  bgColor={'#414833'} padding={'20px 10%'} borderRadius={'25px'} id='authForm'>
                <FormControl>
                    <FormLabel fontSize='1rem' color={'#C2C5AA'}>Email address</FormLabel>
                    <Input type='text' fontSize='1rem' color='#C2C5AA' id='username'/>
                    <FormLabel fontSize='1rem' color='#C2C5AA' margin='20px 0px 5px 0px'>Password</FormLabel>
                    <Input type='password' fontSize='1rem' color='#C2C5AA' id='password'/>
                    <FormHelperText fontSize='1rem' color='#C2C5AA' alignContent={"center"} justifyContent={"center"}>We'll never share your email or password.</FormHelperText>

                </FormControl>
                <Button margin='20px' width='300px' alignSelf='center' bgColor={'#B6AD90'} onClick={() => initialClick()}>Sign Up</Button>
                <Button margin='20px' width='300px' alignSelf='center' bgColor={'#B6AD90'} onClick={() => handleLogIn()}>Log In</Button>
                </Box>
                </Center>
                
                <ScaleFade initialScale={0.9} in={isOpen}>
                <Box
                 p='20px 10%'
                 bgColor='#414833'
                 mt='4'
                 color={'#C2C5AA'}
                 borderRadius='25px'
                 shadow='md'
                >
                <FormControl>
                    <Text fontSize='1.5rem' color='#C2C5AA' alignContent="center" justifyContent={"center"} marginBottom={'20px'}>Just a few more steps...</Text>
                    <FormLabel fontSize='1rem' color={'#C2C5AA'}>Age</FormLabel>
                    <Input type='number' fontSize='1rem' color='#C2C5AA' id='age'/>
                    <FormLabel fontSize='1rem' color='#C2C5AA' margin='20px 0px 5px 0px'>Location</FormLabel>
                    <Input type='text' fontSize='1rem' color='#C2C5AA' id='location'/>
                    <FormLabel fontSize='1rem' color='#C2C5AA' margin='20px 0px 5px 0px'>Contact Detail</FormLabel>
                    <Input type='text' fontSize='1rem' color='#C2C5AA' id='contactDetail'/>
                    <FormHelperText fontSize='1rem' color='#C2C5AA' alignContent={"center"} justifyContent={"center"}>We'll never share your email or password.</FormHelperText>

                </FormControl>
                <HStack>
                <Button margin='20px' width='300px' alignSelf='center' bgColor={'#B6AD90'} onClick={() => handleSignUp()}>Submit</Button>
                <Button margin='20px' width='300px' alignSelf='center' bgColor={'#B6AD90'} onClick={() => handleSignUp()}>Skip</Button>
                </HStack>
                </Box>
                </ScaleFade>
                </Container>
                </Flex>

        </>
    )
}

export default LoginForm