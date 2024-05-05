import React, { useEffect } from 'react'
import { useState } from 'react';
import {  VStack,Image} from '@chakra-ui/react';
import { Text,Box,Center } from '@chakra-ui/react';
import {useSound} from 'use-sound';
import Sound from '../Static/bgm1.mp3';
import Pict1 from '../Static/1000000929.jpg'
import Pict2 from '../Static/d7e26edd-277e-495d-baa2-d4495e29caaa-1_all_597.jpg'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from './W022Navvar';
import Bodys from './W023Body';
import './Home.css'

const Home = () => {
  const location = useLocation();
  const [play,{stop,pause}] = useSound(Sound);


  useEffect(() => {
    if(location.state.sound === true){
        play();
    }
  })
  return (
    <VStack w="60vw" h="100vh" margin="auto" spacing={0}>
        <Nav />
        <Bodys />
    </VStack>
  )
}

export default Home;