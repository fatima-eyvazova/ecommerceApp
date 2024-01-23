import * as React from "react";
// mui
import { tableCellClasses } from "@mui/material/TableCell";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";

import {
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  // TableItem,
  TableFooter,
  TablePagination,
  Grid,
  TableBody,
} from "@mui/material";
// react icons

import { BiReceipt } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";

import TableItem from "../TableItem/TableItem";
import { GetOrderItem } from "../../../pages/Orders/types";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const TablePaginationActions: React.FC<TablePaginationActionsProps> = (
  props
) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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

const OrderTable = ({ list }: { list: GetOrderItem[] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = [
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 0",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jkjbkony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
    {
      name: 1063,
      orderTime: "Jan 2, 2024 10:30 AM",
      customerName: "Jony",
      amount: "$ 90",
      status: "Delivered",
      action: "Delivered",
      invoice: (
        <>
          <button type="button">
            <BiReceipt />
          </button>
          <button>
            <IoIosPersonAdd />
          </button>
        </>
      ),
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid item xs={12}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead
              sx={{ backgroundColor: "#000", color: "#fff" }}
              style={{ backgroundColor: "red" }}
            >
              <TableRow>
                <StyledTableCell align="left">Order Time</StyledTableCell>
                <StyledTableCell align="left">Customer Name</StyledTableCell>
                <StyledTableCell align="left">Method</StyledTableCell>
                <StyledTableCell align="left">Amount</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
                <StyledTableCell align="left">Invoice</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflow: "auto" }}>
              {list?.length
                ? list?.map((item) => <TableItem item={item} key={item?._id} />)
                : null}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12}>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Grid>
      </Grid>
    </TableContainer>
  );
};

export default OrderTable;
