import { motion,AnimatePresence } from 'framer-motion'
import React from 'react'
import { Text } from '@chakra-ui/react';
import { Bars } from 'react-loader-spinner';

const Loading = ({onComplete}) => {
  return (
    <AnimatePresence mode="wait">
        <motion.div initial={{ opacity: 1}} animate={{opacity:0}} transition={{duration:1,delay:2}} onAnimationComplete={onComplete}>
            <Bars color="#63B3ED" ariaLabel="bars-loading"  wrapperClass="justify-content-center" />
            <motion.div initial={{ opacity: 0}} animate={{ opacity: [0, 1, 0]}} transition={{ duration: 1.5, repeat: Infinity,ease:"linear"}}>
                <Text fontSize="lg" >
                    NowLoading...
                </Text>
            </motion.div>
        </motion.div>
    </AnimatePresence>  
  )
}

export default Loading;