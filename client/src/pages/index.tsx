import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { DataTable } from "@/components/DataTable/DataTable";
import {columns} from "@/utils/columns";
import { dummyData } from '@/utils/dummyData';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DataTable columns={columns} data={dummyData} />
  )
}
