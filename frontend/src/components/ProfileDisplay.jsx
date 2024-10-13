import React from 'react';  

import { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import useProfile from '../feed/profiles';
import Cookie from 'js-cookie'
import { MdDelete } from "react-icons/md";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
  Container
} from "@chakra-ui/react";



const ProfileDisplay = ({profile}) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {deleteProfile, profileUpdate} = useProfile()

  const handleDelete = async () =>{
    const {success, message} = await deleteProfile(profile._id)
    if(success){
      windows.location.href='/'
      Cookie.remove('username')
    }
    console.log('Success:', success)
    console.log('Message:', message)
  }
  const handleUpdateProfile = async (pid) => {
    const location = document.getElementById('location').value
    const age = document.getElementById('age').value
    const contactInformation = document.getElementById('contactDetail').value
    const updatedProfile = {
      location: location,
      age: age,
      contactInformation: contactInformation
    }
		const { success, message } = await profileUpdate(pid, updatedProfile);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};
  return(
    <>
    <Container justifyContent={'center'} alignContent={'center'} textAlign={'center'}>  
    <Box
			shadow='dark-lg'
			borderRadius={'25px'}
			overflow='hidden'
			transition='all 0.3s'
      bgColor={'#414833'}
      width={'450px'}
      h={'auto'}
      margin={'50px'}
      
		  >
			<Box p={'20px 10%'}>
				<Heading as='h3' size='xl' mb={2} textAlign={'center'} color={'#C2C5AA'}>
					{profile.username}, {profile.age}
				</Heading>
        <Box bgColor="#7F4F24" p={'10px 10%'} borderRadius={'25px'} mt='20px'>
				<Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'20px 0 20px 0'}>
					Location: {profile.location}
				</Text>
        </Box>

        <Box bgColor="#7F4F24" p={'10px 10%'} borderRadius={'25px'} mt='20px'>
				<Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'20px 0 20px 0'}>
					Contact: {profile.ContactInformation}
				</Text>
        </Box>

				<HStack spacing={2} margin={'20px'} justifyContent={'space-around'}>
					<IconButton icon={<FaEdit />} bgColor={'#656D4A'} onClick={onOpen} />
					<IconButton
						icon={<MdDelete />}
						bgColor={'#656D4A'}
            onClick={() => handleDelete()}
					/>
				</HStack>
			</Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered='true'>
				<ModalOverlay />

				<ModalContent bgColor={'#7F4F24'} w={'450px'} borderRadius={'25px'}>
					<ModalHeader textAlign='center'fontSize={'50px'}>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
               fontWeight='bold'
                bgColor={'#582F0E'}
								placeholder='Age'
                
								name='age'
								type='number'
								id='age'
                color={'black'}
                fontSize={'30px'}
                height={'80px'}
                border={'none'}
							/>
							<Input
              fontSize={'30px'}
               fontWeight='bold'
								placeholder='Location'
								name='location'
								id="location"
                bgColor={'#936639'}
                color={'black'}
                height={'80px'}
                border={'none'}
							/>
              <Input
								placeholder='Contact Detail'
                 fontWeight='bold'
                 border={'none'}
								name='contact'
								id = 'contactDetail'
                bgColor={'#936639'}
                fontSize={'30px'}
                height={'80px'}
                color={'black'}
							/>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateProfile(profile._id)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
      </Box>
      </Container>
      </>
  )
  }

  
  
export default ProfileDisplay;