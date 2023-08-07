import { TradeDataType } from "@/types";
import { Box } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TradeDataType>();

export const tradeColumns = [
  columnHelper.accessor("id", {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: "ID"
  }),
  columnHelper.accessor("bookName", {
    cell: (info) => info.getValue(),
    header: "Book Name"
  }),
  columnHelper.accessor("counterpartyname", {
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
    cell: (info) => info.getValue(),
    header: "Trade Date"
  }),
  columnHelper.accessor("settlementDate", {
    cell: (info) => info.getValue(),
    header: "Settlement Date"
  })
];