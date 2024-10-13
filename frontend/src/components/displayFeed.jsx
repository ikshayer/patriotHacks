

import {Box, Container, HStack, Text, Link, Button, useDisclosure, Stack, Input, Slide, VStack, Heading, Flex} from '@chakra-ui/react'
import { useState } from 'react';
const DisplayFeed = ({job}) => {
    const {SideJob, setSideJob} = useState()
    return(
        <>
        <Flex>
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
                <VStack>
                <Box p={'20px 10%'} alignItems={'flex-start'} textAlign={'left'}>
				<Heading as='h3' size='xl' mb={2} color={'#C2C5AA'} >
					{job.title}
				</Heading>
                <Box>
				<Text fontWeight='semibold' fontSize='2xl' color={'#C2C5AA'} >
					by {job.author}
                    
				</Text>
                </Box>

                <Box>
				<Text fontWeight='bold' fontSize='2xl' color={'#C2C5AA'} m={'20px 0 20px 0'}>
					Date: {job.time}
				</Text>
                </Box>
                </Box>
                </VStack>
            </Box>
        
        </Flex>
        </>
    )
}

export default DisplayFeed;
