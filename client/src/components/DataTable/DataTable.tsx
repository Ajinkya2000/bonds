import { Box, chakra, Flex, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import * as React from "react";
import { BondDataType } from "@/types"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import styles from '@/styles/DataTable.module.css';
import { roboto } from "@/utils/fonts";
import { BsChevronDown, BsChevronUp, BsChevronExpand } from 'react-icons/bs'
import { useRouter } from "next/router";

export type DataTableProps<Data extends Object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
	const router = useRouter();

	const [sorting, setSorting] = React.useState<SortingState>([]);
	const table = useReactTable({
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting
		}
	});

  return (
    <Box className={styles.tableContainer}>
      <Table borderTop="1px" borderColor="gray.550">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta: any = header.column.columnDef.meta;
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}
                    color="gray.425"
                    textTransform="none"
                    fontWeight="500"
                    fontFamily={roboto.style.fontFamily}
                  >
										<Flex alignItems='center'>
	                    {flexRender(
	                      header.column.columnDef.header,
	                      header.getContext()
	                    )}

	                    <chakra.span pl="4">
	                      {header.column.getIsSorted() ? (
													header.column.getIsSorted() === "desc" ? (
														<BsChevronDown aria-label="sorted descending" />
													) : (
														<BsChevronUp aria-label="sorted ascending" />
													)
												) : <BsChevronExpand />}
	                    </chakra.span>
										</Flex>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              bg="gray.250"
              paddingY={4}
              fontSize={"sm"}
              color="gray.750"
            >
              {row.getVisibleCells().map((cell) => {
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td
                    key={cell.id}
                    isNumeric={meta?.isNumeric}
                   
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
