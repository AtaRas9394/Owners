import React from 'react'
import { useState } from 'react';
import {  VStack} from '@chakra-ui/react';
import SoundSelect from './W012SoundSelect';
import Loading from './W013Loading';

const Welcome = () => {
    const [isTop,settingTop] = useState(true)
    const [soundset,settingSound] = useState(false)

    const playSound = () => {
        settingTop(false)
        settingSound(true)
    }

    const stopSound = () => {
        settingTop(false)
        settingSound(false)
    }


  return (

    <VStack spacing={6} w='100%' h='100%' justify='center' >
            {isTop ? 
                <SoundSelect playSound={playSound} stopSound={stopSound} />
            :
                <Loading  soundset={soundset}/>
            }
    </VStack>
  )
}

export default Welcome;