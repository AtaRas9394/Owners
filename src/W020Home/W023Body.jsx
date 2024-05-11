import React from 'react'
import {  VStack,Image,Box,Flex, Button, Stack} from '@chakra-ui/react';
import Pict1 from '../Static/1000000929.jpg'
import Pict2 from '../Static/d7e26edd-277e-495d-baa2-d4495e29caaa-1_all_597.jpg'
import { motion } from 'framer-motion';
import { TwitterX,Github,Instagram } from 'react-bootstrap-icons';

const Bodys = () => {


  return (

    <VStack w="100%" h="100%" justifyContent="center"  spacing={6}>
        
        <Flex w="100%" h="100%" alignItems="center" justifyContent="space-between" >
            
            <motion.div style={{width:"55%"}} initial={{opacity:0,x:"30%"}} animate={{opacity:1,x:0 }} transition={{ duration: 1,delay:2}} > 
                <VStack spacing={2} alignItems="flex-start" marginStart={10}>
                
                    <Box color="white" fontSize="40px" >
                        あたま
                    </Box>

                    <Box color="white" fontSize="large">
                        Web系エンジニア（フロントエンド、バックエンド、インフラ）
                    </Box>

                    <Box color="white" fontSize="large">
                        社内向けシステムを担当、しがないワンオペエンジニア
                    </Box>

                    <Box color="white" fontSize="large">
                        『一人でも多くの人に喜ばれるシステム』をモットーに日々勉強中
                    </Box>
                
                    <Box color="white" fontSize="large">
                        名前の由来は「ガラケー時代に入力しやすかったから」
                    </Box>

                <motion.div style={{width:"55%"}} initial={{opacity:0,y:"-30%"}} animate={{opacity:1,y:0 }} transition={{ duration: 1,delay:3}} > 
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Box color="white" fontSize="large">
                            SNS Links:
                        </Box>

                        <Button variant="none"  >
                            <TwitterX size={25} color='white'/>
                        </Button> 

                        <Button variant="none"  >
                            <Github size={25} color='white'/>
                        </Button> 

                        <Button variant="none"  >
                            <Instagram size={25} color='white'/>
                        </Button> 

                    </Stack>

                </motion.div>
                </VStack>
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