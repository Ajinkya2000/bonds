import { BondModal } from "@/components/DataTable/BondModal";
import { TradeDataType } from "@/types";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDate } from "./date";
import {RiEditBoxLine} from 'react-icons/ri';

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

      let newSettlementDate = new Date(settlementDate);

      return <>{formatDate(newSettlementDate)}</>
    },
    header: "Settlement Date"
  }),
  columnHelper.accessor("securityModel.maturityDate", {
    cell: (info) => {
      let settlementDate = info.getValue();
      if (!settlementDate) return;

      settlementDate = new Date(settlementDate);

      return <>{formatDate(settlementDate)}</>
    },
    header: "Maturity Date"
  }),
  columnHelper.display({
    header: "Status",
    cell: (info) => {
      // if (!info.row.original.settlementDate) {
      //   return <Box w="fit-content" px="3" fontSize="xs" bg="green.150" textAlign="center" color="green.650" fontWeight="500" borderRadius="4px">Not Matured</Box>
      // }
      const today = new Date();
      const tradeDate = new Date(info.row.original.tradeDate);
      const settlementDate = new Date(info.row.original.settlementDate);
      // console.log(info.row.original);
      const maturityDate = new Date(info.row.original.securityModel.maturityDate);

      if (maturityDate > today) {
        return <Box w="fit-content" px="3" fontSize="xs" bg="gray.350" textAlign="center" color="gray.650" fontWeight="500" borderRadius="4px">Not Matured</Box>
      } else {
        if (maturityDate <= settlementDate) {
         
         return <Box w="fit-content" px="3" fontSize="xs" bg="green.150" textAlign="center" color="green.650" fontWeight="500" borderRadius="4px">Settled</Box>
        } else {
          return <Box w="fit-content" px="3" fontSize="xs" bg="red.150" textAlign="center" color="red.650" fontWeight="500" borderRadius="4px">Not Settled</Box>
        }
      }


    } 
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const {isOpen,onOpen,onClose} = useDisclosure();
      const data = props.row.original;

      return (
      <>
        <Button size='sm' bg='none' fontWeight='400' onClick={onOpen} color='blue.450'>Edit   <RiEditBoxLine style={{marginLeft: '5px'}}/></Button>
        <BondModal isOpen={isOpen} onClose={onClose} data={data}></BondModal>
      </>
      )
    }
  ,
  })
];