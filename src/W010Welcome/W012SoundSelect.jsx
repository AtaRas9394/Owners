import { motion } from 'framer-motion'
import React from 'react'
import { Stack,Text,Button, VStack, Flex, Circle } from '@chakra-ui/react';
import { VolumeUpFill,VolumeMuteFill } from 'react-bootstrap-icons';

const SoundSelect = ({onSelectSound}) => {

  return (
            
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 2}} exit={{opacity:0}}>

        <Flex fontSize="4xl"  justify='center'>
            サイトへようこそ
        </Flex>
        <Stack direction='row' spacing={6} margin={2} justify='center'>
            <Button onClick={() => onSelectSound(true)} variant="none" w='80px' h='100px' aria-label="SoundOn" >
                <VStack>
                    <Circle w='75px' h='75px' bg="blue.300" ><VolumeUpFill size={50} color='white' className='rounded-circle'/></Circle>
                    <Text color="blue.300">ON</Text>
                </VStack>
            </Button>
            <Button onClick={() => onSelectSound(false)} variant="none" w='80px' h='100px' aria-label="SoundOff" >
                <VStack>
                    <Circle w='75px' h='75px' bg="blue.300"><VolumeMuteFill size={50} color='white' className='rounded-circle'/></Circle>
                    <Text color="blue.300">OFF</Text>
                </VStack>
            </Button>
        </Stack>
        <Text fontSize="md" margin={2} color="blue.300">
            ※サウンドが流れます。音量に注意してください。
        </Text>


    </motion.div>
  )
}

export default SoundSelect;