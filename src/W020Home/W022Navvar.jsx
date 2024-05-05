import {Box,Flex,Button,Stack,VStack} from '@chakra-ui/react';

const menu = [
  {id: 1,title:"Home"},
  {id: 2,title:"About Us"},
  {id: 3,title:"Products"},
  {id: 4,title:"Contact"},
]

export default function Nav() {

  return (
    <Flex w="100%" h="10%" alignItems="center" justifyContent="space-between">
      
      <VStack alignItems="flex-start" spacing={0}>
      
        <Box color="white" fontSize="40px" >
          Ataras
        </Box>

        <Box color="white" fontSize="large">
          ~Atama & Rascal~
        </Box>
      
      </VStack>

      <Stack direction="row" spacing={7} alignItems="center" justifyContent="flex-end" >

        {menu.map(item => 
          <Button key={item.id} variant="none" fontSize="large" color="white" >
            {item.title}
          </Button>
        )}
      
      </Stack>
    
    </Flex>
  );
}