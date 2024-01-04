import * as React from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { BiReceipt } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import TableBody from "@mui/material/TableBody";

import { styled } from "@mui/material/styles";

import "./TableItem.scss";

const TableItem = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const StyledSelect = styled(Select)({
    minWidth: "80px",
  });

  const StyledMenuItem = styled(MenuItem)({
    fontSize: 14,
  });
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
      amount: "$ 70",
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
      amount: "$ 80",
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
      amount: "$ 20",
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
      amount: "$ g40",
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
  return (
    <TableBody sx={{ overflow: "auto" }}>
      {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell className="number">{row.name}</StyledTableCell>
          <StyledTableCell className="time">{row.orderTime}</StyledTableCell>
          <StyledTableCell className="name">{row.customerName}</StyledTableCell>
          <StyledTableCell className="amount">{row.amount}</StyledTableCell>
          <StyledTableCell className="status">{row.status}</StyledTableCell>
          <StyledTableCell className="action">
            <StyledSelect
              value={row.action}
              sx={{
                width: "80%",
                height: "30px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              <StyledMenuItem value="Delivered">Delivered</StyledMenuItem>
              <StyledMenuItem value="Pending">Pending</StyledMenuItem>
              <StyledMenuItem value="Processing">Processing</StyledMenuItem>
              <StyledMenuItem value="Cancel">Cancel</StyledMenuItem>
            </StyledSelect>
          </StyledTableCell>
          <StyledTableCell className="invoice" sx={{ textAlign: "center" }}>
            <ButtonGroup size="small" variant="text">
              <IconButton>
                <BiReceipt />
              </IconButton>
              <IconButton>
                <IoIosPersonAdd />
              </IconButton>
            </ButtonGroup>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      {emptyRows > 0 && (
        <StyledTableRow style={{ height: 53 * emptyRows }}>
          <StyledTableCell colSpan={6} />
        </StyledTableRow>
      )}
    </TableBody>
  );
};

export default TableItem;
