import { Box, Button, Center, Divider, Flex, Spacer, Text } from '@chakra-ui/react';
import bondX from '@/images/bondX.png';
import Image from 'next/image';
import { roboto } from '@/utils/fonts';
import { AiOutlineLogout } from "react-icons/ai";
// import react, { Component} from "react"


const Navbar = () => {
  return (
    <Flex py="3" px='3' mb='4' borderBottom="1px" borderColor="gray.550" alignItems='center' fontFamily={roboto}>
      <Image src={bondX} alt="logo" width='80' />
      <Box mx="4" bg='red' height='30px'>
        <Divider orientation='vertical' opacity="1" />
      </Box>
      <Flex justifyContent='space-between' width='15%'>
        <Text fontSize='sm'>Bonds</Text>
        <Text fontSize='sm'>Trades</Text>
        <Text fontSize='sm'>Books</Text>
      </Flex>
      <Spacer/>
      <AiOutlineLogout size={28}/>
      <Text padding={'2'} fontSize='sm' textAlign={'center'}>chui chui  </Text>
      {/* <Button marginLeft={'5'}>Logout</Button> */}
    </Flex>
  )
}

export default Navbar;