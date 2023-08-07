import { useEffect } from 'react';
import {Box} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'

import { DataTable } from "@/components/DataTable/DataTable";
import {columns} from "@/utils/columns";
import { dummyData } from '@/utils/dummyData';
import bondsapi from '@/endpoints/bondsapi';

export default function Home() {

  useEffect(() => {
    console.log("Fetching Data.....");
    const fetchData = async () => {
      const res = await bondsapi.get("/book");
      console.log(res);
    }

    // fetchData();
  })

  return (
    <Box>
      <DataTable columns={columns} data={dummyData} />
    </Box>
  )
}
