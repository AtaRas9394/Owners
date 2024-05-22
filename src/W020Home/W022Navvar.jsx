import {Box,Flex,Button,Stack,VStack,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { VolumeMute, VolumeOff, VolumeUp } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
const menu = [
  {id: 1,title:"About Us"},
  {id: 2,title:"Products"},
  {id: 3,title:"Contact"},
]

export default function Nav({soundset,onSoundSetChange,volume,onVolumeChange}) {

  const [selectedSound,setSelectedSound] = useState(soundset);
  const navigate = useNavigate();

  const handleSoundSetOn = () => {
    if(selectedSound === false){
      setSelectedSound(true)
      onSoundSetChange(true)
    }
  };

  const handleSoundSetOff = () => {
    if(selectedSound === true){
      setSelectedSound(false)
      onSoundSetChange(false)
    }
  }

  const handleMoveHome = () => {
    navigate("/",{replace:true});
  }
  return (
    <Flex w="100%" h="10%" alignItems="center" justifyContent="space-between">
      
      <Button variant="none" size="large" onClick={handleMoveHome}>
        <VStack alignItems="flex-start" spacing={0}>
        
          <Box color="white" fontSize="40px" >
            Ataras
          </Box>

          <Box color="white" fontSize="large">
            ~Atama & Rascal~
          </Box>
        
        </VStack>
      </Button>


      <Stack direction="row" alignItems="center" spacing={7} >

        {menu.map(item => 
          <Button key={item.id} variant="none" fontSize="large" color="white" >
            {item.title}
          </Button>
        )}
        <VStack  spacing={0}>


          <Stack direction="row" alignItems="center" spacing={0}>
            {selectedSound ?
            <>
              <Button variant="none" onClick={handleSoundSetOn} >
                <VolumeUp size={30} color='blue'/>
              </Button> 
              
              <Button variant="none" onClick={handleSoundSetOff} >
                <VolumeMute size={30} color='white'/>
              </Button>
            </>
            :
            <>
              <Button variant="none" onClick={handleSoundSetOn} >
                <VolumeUp size={30} color='white'/>
              </Button> 
          
              <Button variant="none" onClick={handleSoundSetOff} >
                <VolumeMute size={30} color='blue'/>
              </Button>            
            </>

            }
          </Stack>
            


          <Slider aria-label='slider-ex-1' min={0} max={1} step={0.01} defaultValue={0.5} value={volume} onChange={onVolumeChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>

      
      </Stack>
 
    </Flex>
  );
}