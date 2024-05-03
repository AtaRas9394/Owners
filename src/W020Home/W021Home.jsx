import React, { useEffect } from 'react'
import { useState } from 'react';
import {  VStack,Image} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
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
    <>
      <motion.div style={{background:"black",overflow:"hidden"}} initial={{ opacity: 1}} animate={{ opacity: 1}} transition={{ duration: 1}} >
        <Nav />
        <svg width="100vw" height="100vh" xmlns="http://www.w3.org/2000/svg" >
          <motion.line
            stroke="white" // 線の色
            strokeWidth="2" // 線の太さ
            initial={{ x1: "0%", y1: "0%", x2: "0%", y2: "0%" }} // 初期状態
            animate={{ x1: "0%", y1: "0%", x2: "100%", y2: "92%" }} // アニメーションの目標値
            transition={{ duration: 1,delay:1,ease:'easeOut' }} // アニメーションの時間（秒）
          />
        </svg>

        <motion.div style={{position:"absolute",top:100,bottom:500,right:200}} initial={{ opacity: 0}} animate={{opacity:1}} transition={{ duration: 1,delay:2.5}}> 
          <Image alt="" title="test"  src={Pict1}   width="15vw" height="40vh" />
        </motion.div >
        <motion.div style={{position:"absolute",top:500,left:100,right:800}} initial={{ opacity: 0}} animate={{opacity:1}} transition={{ duration: 1,delay:2.5}}> 
          <Image alt="2" title="test2"  src={Pict2}  width="30vw" height="40vh" />
        </motion.div >         
        {/* <Nav /> */}
        <Bodys />
      </motion.div> 
    </>

  )
}

export default Home;