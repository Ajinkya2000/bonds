import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<any>();

export const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: "ID"
  }),
  columnHelper.accessor("isin", {
    cell: (info) => info.getValue(),
    header: "ISIN"
  }),
  columnHelper.accessor("cusip", {
    cell: (info) => info.getValue(),
    header: "CUSIP",
  }),
  columnHelper.accessor("issuer", {
    cell: (info) => info.getValue(),
    header: "ISSUER"
  }),
];