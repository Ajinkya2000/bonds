import { Inter } from 'next/font/google';

import { DataTable } from "@/components/DataTable/DataTable";
import bondsapi from '@/endpoints/bondsapi';
import { BondDataType } from '@/types';
import { columns } from "@/utils/columns";
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data,setData] = useState<BondDataType[]>([]);

  const fetchData = async () => {
    const dat:BondDataType[] = (await bondsapi.get("/security"));
  }

  useEffect(() => {
    bondsapi.get("/security").then((response)=>setData(response.data));
  },[]);

  return (
    <DataTable columns={columns} data={data}/>
  )
}
