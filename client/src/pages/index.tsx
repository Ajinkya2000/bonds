import { DataTable } from "@/components/DataTable/DataTable";
// import { dummyData } from '@/utils/dummyData';
import bondsapi from '@/endpoints/bondsapi';
import { BondDataType } from '@/types';
import { columns } from "@/utils/columns";
import { useEffect, useState } from 'react';

export default function Home() {

  const [data, setData] = useState<BondDataType[]>([]);

  useEffect(() => {
    bondsapi.get("/security").then((response) => setData(response.data));
  }, []);

  return (
    <DataTable columns={columns} data={data} />
  )
}
