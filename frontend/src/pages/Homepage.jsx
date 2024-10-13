import Navbar from '../components/NavBar'
import { useJobFeed } from '../feed/jobs'
import { Container, HStack, Flex, Box, VStack, Heading, Text, ScaleFade, useDisclosure, Button, useToast } from '@chakra-ui/react'
import displayFeed from '../components/displayFeed'
import DisplayFeed from '../components/displayFeed.jsx'
import { useEffect, useState } from 'react'



function Homepage() {
    const toast = useToast()
    const {fetchJobs, jobs} = useJobFeed()
    const [isOpen, setOpen] = useState(false)
    const [sideJob, setSideJob] = useState({
        title: '',
        author: '',
        location: '',
        time: '',
        description: '',
        contactInfo: ''
    })
    const handleApply = () =>{
        toast({
            title: 'Application successful',
            description: "You have successfully applied to the app",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }
    useEffect(() => {
        fetchJobs()
    }, [fetchJobs])

    const handleClick = (prop) =>{
        console.log(prop)
        setSideJob(prop)
        setOpen(true)

    }
    return(
        <>
            <Flex direction={'column'} transform={'translate(250px, 0px)'}>
                
                {jobs.map((job) => (
                   <Box key={job._id} _hover={{cursor:'pointer'}}
                   onClick={() => handleClick(job)}><DisplayFeed job={job} /> </Box>
                ))}
                
                
                 </Flex>
                {sideJob &&(
                 <ScaleFade initialScale={0.9} in={isOpen}>
                <Box id='sideBar'
                overflowY='scroll'
			    shadow='dark-lg'
			    borderRadius={'25px'}
			    transition='all 0.3s'
                transform={'translate(0, -717px)'}
                bgColor={'#414833'}
                width={'450px'}
                h={'545px'}
                margin={'50px'}
                position={'fixed'}
                right={'200px'}
                top={'75px'}
                
                >
                
                        <VStack>
                        <Box p={'20px 10%'} alignItems={'flex-start'} textAlign={'left'}>
                        <Heading as='h3' size='xl' mb={2} color={'#C2C5AA'} >
                            {sideJob.title}
                        </Heading>
                        <Box>
                        <Text fontWeight='semibold' fontSize='2xl' color={'#C2C5AA'} >
                            by {sideJob.author}
                            
                        </Text>
                        </Box>
        
                        <Box>
                        <Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'20px 0 20px 0'}>
                            Date: {sideJob.time}
                        </Text>
                        <Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'30px 0 20px 0'}>
                            {sideJob.description}
                        </Text>
                        <Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'20px 0 20px 0'}>
                            We are located at {sideJob.location}
                        </Text>
                        <Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'10px 0 20px 0'}>
                            Contact at {sideJob.contactInfo}
                        </Text>
                        <Button onClick={() => handleApply()}>
                            Apply Now
                        </Button>
                        </Box>
                        </Box>
                        </VStack>

                
                
		        </Box>
                </ScaleFade>
                )}
            
        </>
    )
}

export default Homepage