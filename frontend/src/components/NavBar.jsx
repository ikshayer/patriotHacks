import {Box, Container, HStack, Text, Link, Button, useDisclosure, Stack, Input, Slide} from '@chakra-ui/react'
import { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()




    return(
        <>
        <Container>
    
            <HStack spacing={5} justifyContent='center'>
            <Text color='#a4ac86' fontSize='2xl' bgColor='#3a5a40' padding='10px 10%' borderRadius='25px'><Link>Home</Link></Text>
            <Text color='#a4ac86' fontSize='2xl' bgColor='#3a5a40' padding='10px 10%' borderRadius='25px'><Link>Leaderboard</Link></Text>
            <Text color='#a4ac86' fontSize='2xl' bgColor='#3a5a40' padding='10px 10%' borderRadius='25px'><Link>Profile</Link></Text>
            
            <Text><Button color='#a4ac86' bgColor='#7f4f24' padding='12px 10%' borderRadius='25px' fontSize='2xl' width='200px' height='auto' onClick={onOpen}>Category</Button></Text>
            </HStack>

        </Container>

        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            trapFocus={false}
            z-index = '-1'
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
                <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    
       /*
        <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row",
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
            >
                <Link to={"/"}>Feed</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/profile"}>
                    <Button>
                        <PlusSquareIcon fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                </Button>
            </HStack>
        </Flex>
        </Container>
        */
    )
}

export default Navbar