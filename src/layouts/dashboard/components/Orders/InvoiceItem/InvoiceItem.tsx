import * as React from "react";
import { GrView } from "react-icons/gr";
import { BiPencil, BiTrash } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import {
  TableBody,
  tableCellClasses,
  TableRow,
  TableCell,
  Avatar,
  Switch,
  Tooltip,
  IconButton,
  Grid,
  Checkbox,
} from "@mui/material";
const label = { inputProps: { "aria-label": "Switch demo" } };

const InvoiceItem = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
  const rows = [
    {
      name: 1,
      email: "Title product",
      phoneNumber: "8",
      registrationDate: "700$",
      discount: "20$",
      role: "800$",
    },
  ];
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableBody>
      {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row, index) => (
        <TableRow key={index}>
          <TableCell>
            <Grid
              container
              spacing={2}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid item>{row.name}</Grid>
            </Grid>
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.phoneNumber}</TableCell>
          <TableCell>{row.registrationDate}</TableCell>
          <TableCell>{row.discount}</TableCell>
          <TableCell>{row.role}</TableCell>
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <StyledTableRow style={{ height: 53 * emptyRows }}>
          <StyledTableCell colSpan={6} />
        </StyledTableRow>
      )}
    </TableBody>
  );
};

export default InvoiceItem;
