import { DataTable } from "@/components/DataTable/DataTable";
import bondsapi from '@/endpoints/bondsapi';
import { BondDataType } from '@/types';
import { columns } from "@/utils/columns";
import { Box, Flex, Button, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { GoMultiSelect } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Home() {

  const [data, setData] = useState<BondDataType[]>([]);

  useEffect(() => {
    bondsapi.get("/security").then((response) => setData(response.data));
  }, []);

  return (
    <Box>
      <Flex justifyContent='space-between' alignItems='center'>
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
      <DataTable columns={columns} data={data} />
    </Box>
  )
}
