import { TradeDataType } from "@/types";
import { Box } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDate } from "./date";

const columnHelper = createColumnHelper<TradeDataType>();

export const tradeColumns = [
  columnHelper.accessor("id", {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: "ID"
  }),
  columnHelper.accessor("counterpartyName", {
    cell: (info) => {
      return info.getValue()
    },
    header: "Counterparty Name"
  }),
  columnHelper.accessor("quantity", {
    cell: (info) => info.getValue(),
    header: "Quantity"
  }),
  columnHelper.accessor("price", {
    cell: (info) => info.getValue(),
    header: "Price"
  }),
  columnHelper.accessor("tradeDate", {
    cell: (info) => {
      let tradeDate = info.getValue();
      if (!tradeDate) return;

      tradeDate = new Date(tradeDate);

      return <>{formatDate(tradeDate)}</>
    },
    header: "Trade Date"
  }),
  columnHelper.accessor("settlementDate", {
    cell: (info) => {
      let settlementDate = info.getValue();
      if (!settlementDate) return;

      settlementDate = new Date(settlementDate);

      return <>{formatDate(settlementDate)}</>
    },
    header: "Settlement Date"
  }),
  columnHelper.display({
    header: "Status",
    cell: (info) => {
      if (!info.row.original.settlementDate) {
        return <Box w="fit-content" px="3" fontSize="xs" bg="green.150" textAlign="center" color="green.650" fontWeight="500" borderRadius="4px">Not Matured</Box>
      }

      const tradeDate = new Date(info.row.original.tradeDate);
      const settlementDate = new Date(info.row.original.settlementDate);
      

      if (tradeDate <= settlementDate) {
        return <Box w="fit-content" px="3" fontSize="xs" bg="green.150" textAlign="center" color="green.650" fontWeight="500" borderRadius="4px">Settled</Box>
      } else {
        return <Box w="fit-content" px="3" fontSize="xs" bg="red.150" textAlign="center" color="red.650" fontWeight="500" borderRadius="4px">Not Settled</Box>
      }

    } 
  })
];