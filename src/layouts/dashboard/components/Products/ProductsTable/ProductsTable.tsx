import * as React from "react";
// mui
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  TableHead,
  TableFooter,
  Table,
  TableContainer,
  TablePagination,
  Checkbox,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
// react icons

import { IoIosPersonAdd } from "react-icons/io";

import { ProductsItem } from "../..";
import { GetProductItem } from "../../../pages/ProductsDashboard/types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  minWidth: "120px",
}));

type Props = {
  list: GetProductItem[];
  selectedBrand: string;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  totalCount: number;
  page: number;
  perPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductsTable = ({
  list,
  selectedBrand,
  selectedItems,
  setUpdateList,
  setSelectedItems,
  totalCount,
  page,
  perPage,
  setPage,
  setPerPage,
  setOpen,
}: Props) => {
  const handleCheckboxChange = (itemId: string) => {
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedSelectedItems);
  };

  function selectCheckboxes() {
    if (selectedItems?.length === list?.length) {
      setSelectedItems([]);
    } else {
      const allItemIds = list.map((item) => item._id);
      setSelectedItems(allItemIds);
    }
  }

  const filteredList = selectedBrand
    ? list.filter((item) => item.brandId === selectedBrand)
    : list;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox
                style={{ backgroundColor: "white" }}
                checked={selectedItems?.length === list?.length}
                onChange={() => {
                  selectCheckboxes();
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="left">Brand</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Sale Price</StyledTableCell>
            <StyledTableCell align="left">Stock</StyledTableCell>
            <StyledTableCell align="left">View</StyledTableCell>
            <StyledTableCell align="left">Published</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {Array.isArray(filteredList)
          ? filteredList.map((item) => (
              <ProductsItem
                setOpen={setOpen}
                key={item?._id}
                item={item}
                selectedItems={selectedItems}
                handleCheckboxChange={handleCheckboxChange}
                setUpdateList={setUpdateList}
              />
            ))
          : []}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={totalCount}
              rowsPerPage={perPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
