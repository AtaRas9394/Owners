import React, { useEffect, useState } from 'react'
import {  VStack,Image,Box,Stack,Grid,GridItem, Text,SimpleGrid, Square,Flex} from '@chakra-ui/react';
import Pict1 from '../Static/1000000929.jpg'
import Pict2 from '../Static/d7e26edd-277e-495d-baa2-d4495e29caaa-1_all_597.jpg'
import { motion } from 'framer-motion';
import './Home.css'
const Bodys = () => {


  return (

    <VStack w="100%" h="100%" justifyContent="center"  spacing={6}>
        
        <Flex w="100%" h="100%" alignItems="center" justifyContent="space-between">
            
            <motion.div style={{width:"55%"}} initial={{opacity:0,x:"30%"}} animate={{opacity:1,x:0 }} transition={{ duration: 1,delay:2}}> 

                <Box color="white" fontSize="40px" >
                    Atama
                </Box>
            
            </motion.div>

            <motion.div style={{width:"45%",display:"flex",alignItems:"center",justifyContent:"flex-end"}} initial={{opacity:0,x:"30%"}} animate={{opacity:1,x:0 }} transition={{ duration: 1,delay:1}}> 
            
                <Image alt="" title="test"  src={Pict1} boxSize='75%'  />
   
            </motion.div >

        </Flex>

        <Flex w="100%" h="100%" alignItems="center" justifyContent="space-between">
            
            <motion.div style={{width:"45%",display:"flex",alignItems:"center",justifyContent:"flex-start"}} initial={{opacity:0,x:"-30%"}} animate={{opacity:1,x:0 }} transition={{ duration: 1,delay:1}}> 
            
                <Image alt="2" title="test2"  src={Pict2} boxSize='100%'  />
            
            </motion.div > 

            <motion.div style={{width:"55%"}} initial={{opacity:0,x:"-30%"}} animate={{opacity:1,x:0}} transition={{ duration: 1,delay:2}}> 
            
                <Box color="white" fontSize="40px" >
                    Rascal
                </Box>   
            
            </motion.div>
        
        </Flex>

    </VStack> 

  )
}

export default Bodys;