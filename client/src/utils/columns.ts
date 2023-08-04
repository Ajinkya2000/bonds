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
  columnHelper.accessor("maturityDate", {
    cell: (info) => {
      const date:Date = info.getValue();
      return date.toISOString();
    },
    header: "maturityDate"
  }),
  columnHelper.accessor("coupon", {
    cell: (info) => info.getValue(),
    header: "coupon"
  }),
  columnHelper.accessor("type", {
    cell: (info) => info.getValue(),
    header: "type"
  }),
  columnHelper.accessor("faceValue", {
    cell: (info) => info.getValue(),
    header: "faceValue"
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: "status"
  }),
];