import { motion,AnimatePresence } from 'framer-motion'
import React,{useEffect, useState} from 'react'
import { Text } from '@chakra-ui/react';
import { Bars } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Loading = ({soundset}) => {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true)
    useEffect(() => {
      const fadeout = setTimeout(() => {
        setFade(false)
        // navigate('/next-page'); // 別ページへの遷移
      }, 3000); // 3秒後に遷移

      const page = setTimeout(() => {
        navigate('/home',{state:{sound:soundset}}); // 別ページへの遷移
      }, 4000); // 3秒後に遷移
      return () => {
        clearTimeout(fadeout); // コンポーネントがアンマウントされたらタイムアウトをクリア
        clearTimeout(page)
      }
    }, [navigate]);
  return (
    <AnimatePresence mode="wait">
    {fade &&
        <motion.div initial={{ opacity: 1}} exit={{opacity:0}}>
            <Bars color="#63B3ED" ariaLabel="bars-loading"  wrapperClass="justify-content-center" />
            <motion.div initial={{ opacity: 0}} animate={{ opacity: [0, 1, 0]}} transition={{ duration: 1.5, repeat: Infinity,ease:"linear"}}>
                <Text fontSize="lg" >
                    NowLoading...
                </Text>
            </motion.div>
        </motion.div>
    }
    </AnimatePresence>  
  )
}

export default Loading;