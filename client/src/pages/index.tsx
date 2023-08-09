import { DataTable } from "@/components/DataTable/DataTable";
import { LoadingSpinner } from "@/components/DataTable/LoadingSpinner";
import { BondDataType } from "@/types";
import { columns } from "@/utils/columns";
import bondsapi from '@/endpoints/bondsapi';
import { Box, Flex, Button, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoMultiSelect } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import Navbar from "@/components/Navbar";
import Login from "@/components/Login/Login";
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCh0kqbeT_s25SPEqPhP8pNUt3YoKsAJjo",
  authDomain: "coding-challenge-ff923.firebaseapp.com",
  projectId: "coding-challenge-ff923",
  storageBucket: "coding-challenge-ff923.appspot.com",
  messagingSenderId: "258263795241",
  appId: "1:258263795241:web:16f9c4c4dbce904da0fe38",
  measurementId: "G-3W7W4FXPGE"
};

const app = initializeApp(firebaseConfig);

export default function Home() {
  const [flag, setFlag] = useState<boolean>(false);
  const [data, setData] = useState<BondDataType[]>([]);

  useEffect(() => {
    bondsapi.get("/security").then((response: any) => setData(response.data));
  }, []);

  return (
    <>
      {flag ? <Box px="3">
        <Navbar />
        <Text fontWeight="600" mb='4' fontSize="xl" display='flex' alignItems='center' gap='10px'>
          Bonds & Securities
          <BsArrowRight />
        </Text>
        <Flex mb='6' justifyContent='space-between' alignItems='center'>
          <Flex>
            <Button size='sm'
              leftIcon={<GoMultiSelect size={18} />}
              borderRadius='2px'
              bg="gray.350"
              border="1px"
              borderColor="gray.550"
              me="5"
            >
              Select Columns
            </Button>

            <Flex justifyContent='center' alignItems='center' border='1px' borderColor="gray.550" px='2'>
              <AiOutlineSearch size={20} />
              <Input size='sm' border='none' height='auto' outline='none' placeholder='Search' boxShadow='none' />
            </Flex>
          </Flex>
        </Flex>
        {data.length === 0 ? <LoadingSpinner /> : <DataTable columns={columns} data={data} />}
      </Box> : <Login setFlag={setFlag} />}
    </>
  )
}