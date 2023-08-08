import { useRouter } from 'next/router'
import { DataTable } from "@/components/DataTable/DataTable";
import { dummyTradeData } from "@/utils/dummyData";
import { tradeColumns } from "@/utils/tradeColumns";
import { useEffect, useState } from 'react';
import bondsapi from '@/endpoints/bondsapi';
import { TradeDataType } from '@/types';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import { BsArrowRight } from 'react-icons/bs';
import { GoMultiSelect } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';

const Security = () => {
  const router = useRouter();
  const securityId = router.query.security;

  const [tradeData, setTradeData] = useState<TradeDataType[] | null>(null);

  useEffect(() => {
    if (!securityId) return;

    const fetchData = async () => {
      const { data } = await bondsapi.get(`/trade/${securityId}`);
      setTradeData(data);
    }

    fetchData();
  }, [securityId])

  return <Box px="3">
      <Navbar />
      <Text fontWeight="600" mb='4' fontSize="xl" display='flex' alignItems='center' gap='10px'>
        Trade details for "BondX"
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
      {tradeData && <DataTable columns={tradeColumns} data={tradeData} />}
    </Box>
};

export default Security;