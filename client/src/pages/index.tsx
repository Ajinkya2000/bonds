import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { DataTable } from "@/components/DataTable/DataTable";
import {columns} from "@/utils/columns";
import { dummyData } from '@/utils/dummyData';
import { useEffect } from 'react';
import bondsapi from '@/endpoints/bondsapi';

const inter = Inter({ subsets: ['latin'] })

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
    <DataTable columns={columns} data={dummyData} />
  )
}
