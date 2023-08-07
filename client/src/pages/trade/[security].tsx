import { DataTable } from "@/components/DataTable/DataTable";
import { dummyTradeData } from "@/utils/dummyData";
import { tradeColumns } from "@/utils/tradeColumns";

const Security = () => {
  return <DataTable columns={tradeColumns} data={dummyTradeData} />
};

export default Security;