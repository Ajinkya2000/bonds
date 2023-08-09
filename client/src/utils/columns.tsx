import { BondDataType } from "@/types";
import { Box, VisuallyHidden } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDate } from "./date";

const columnHelper = createColumnHelper<BondDataType>();

export const columns = [
  columnHelper.accessor("id", {
    cell: (info) => <Box>{info.getValue()}</Box>,
    header: "ID"
  }),
  columnHelper.accessor("issuer", {
    cell: (info) => info.getValue(),
    header: "Issuer"
  }),
  columnHelper.accessor("maturityDate", {
    cell: (info) => {
      const date:Date = new Date(info.getValue());
      return formatDate(date);
    },
    header: "Maturity Date"
  }),
  columnHelper.accessor("coupon", {
    cell: (info) => info.getValue(),
    header: "Coupon"
  }),
  columnHelper.accessor("type", {
    cell: (info) => info.getValue(),
    header: "Type"
  }),
  columnHelper.accessor("faceValue", {
    cell: (info) => info.getValue(),
    header: "Face Value"
  }),
  columnHelper.accessor("status", {
    cell: (info) => {
      const value = info.getValue()?.toLowerCase();
      if (value === "due") {
        return <Box color="blue.550" textAlign='center' bg="blue.250" fontSize={"xs"} fontWeight={700} py={0.5} borderRadius={"lg"}>Due</Box>
      } else if (value === "pending") {
        return <Box color="red.650" textAlign='center' bg="red.150" fontSize={"xs"} fontWeight={700} py={0.5} borderRadius={"lg"}>Pending</Box>
      } else {
        return <Box color="green.650" textAlign='center' bg="green.150" fontSize={"xs"} fontWeight={700} py={0.5} borderRadius={"lg"}>Completed</Box>
      }
    },
    header: "Status"
  }),
];
