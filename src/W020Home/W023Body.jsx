import React, { useEffect, useState } from 'react'
import {  VStack,Box,Stack,Grid,GridItem, Text,SimpleGrid, Square} from '@chakra-ui/react';
import './Home.css'
const Bodys = () => {
    const widthCount = Math.floor(window.innerWidth / 40);
    const heightCount = Math.floor(window.innerHeight / 20);


  return (
    <>

        {/* <SimpleGrid columns={widthCount} spacing={0}>
            {Array.from(Array(heightCount*widthCount)).map((_, index) => (
                // <Square key={index} bg={`blackalpha.${Math.floor(Math.random() * 801) + 100}`} size='40px' border='inset' borderColor="black" />
                //<Square key={index} bg={`blackAlpha.${Math.floor(Math.random() * 10) * 100}`} size='40px' />
            ))}
        </SimpleGrid>  */}

        {/* <VStack spacing={1} w='100%' h='100%' justify='center' >
            <Stack w='100%' h='100%'>
                <Square w='100%' h='100%' bg="black" />
            </Stack>
        </VStack> */}
        {/* {heightCount.map(item => (
            <Stack>
            
            {widthCount.map(item => (
              <Box color="black" />
            ))}
            </Stack>
        ))} 
        </VStack> */}
    </>

  )
}

export default Bodys;