import React, { useEffect } from 'react'
import { useState } from 'react';
import {  VStack, Flex} from '@chakra-ui/react';
import {useSound} from 'use-sound';
import Sound from '../Static/bgm1.mp3';
import { motion } from 'framer-motion';
import Nav from './W022Navvar';
import Bodys from './W023Body';
import SoundSelect from '../W010Welcome/W012SoundSelect';
import Loading from '../W010Welcome/W013Loading';


const Home = () => {
  const [currentComponent, setCurrentComponent] = useState('soundSelection');
  const [selectedSound, setSelectedSound] = useState(false);
  const [play,{stop,pause}] = useSound(Sound);


  useEffect( () => {
    
    const home_sound = localStorage.getItem('home_sound')
    
    if(home_sound){
      setSelectedSound(home_sound)
      setCurrentComponent('home')
    }
  
  },[])

  const handleSelectSound = (sound) => {
    localStorage.setItem('home_sound',sound)
    setSelectedSound(sound)
    setCurrentComponent('loading');
  };

  const handleCompleteLoading = () => {
    //2秒後にホーム画面に遷移する
    const timer = setTimeout(() => {
      setCurrentComponent('home');
    }, 1000);

    return () => clearTimeout(timer);
  }

  const handleCompleteHome = () => {
    if(selectedSound === true){
        play();
    }    
  }

  return (
    <>
      {currentComponent === 'soundSelection' && (
        <VStack spacing={6} w='100%' h='100%' justify='center' >
          <SoundSelect onSelectSound={handleSelectSound} />
        </VStack>
      )}

      {currentComponent === 'loading' && 
      <VStack spacing={6} w='100%' h='100%' justify='center' >

        <Loading onComplete={handleCompleteLoading}/>
        
      </VStack>
        
      }

      {currentComponent === 'home' && 
        <motion.div initial={{ opacity: 0}} animate={{opacity:1}} transition={{duration:1}}  onAnimationComplete={handleCompleteHome}>
          <Flex w="100vw" h="100vh" backgroundColor="black">
            <VStack w="60vw" h="100vh" margin="auto" backgroundColor="black" spacing={0}>
                <Nav />
                <Bodys />
            </VStack>
          </Flex>
        </motion.div>

      
      }
    
    </>

  )
}

export default Home;