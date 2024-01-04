import * as React from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { BiReceipt } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";

import { styled } from "@mui/material/styles";

import {
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Switch,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import { BiPencil, BiTrash } from "react-icons/bi";
const label = { inputProps: { "aria-label": "Switch demo" } };

const OurStaffItem = () => {
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
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const rows = [
    {
      name: "Admin",
      email: "admin@gmail.com",
      phoneNumber: "360-943-7332",
      registrationDate: "Dec 28, 2023",
      role: "Admin",
      status: "Active",
      switchChecked: true,
    },
  ];
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
              <Grid item>
                <Avatar alt={row.name} src="" />
              </Grid>
              <Grid item>{row.name}</Grid>
            </Grid>
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.phoneNumber}</TableCell>
          <TableCell>{row.registrationDate}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>
            <Switch {...label} />
          </TableCell>
          <TableCell>
            <Tooltip title="Edit" arrow>
              <IconButton>
                <BiPencil />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow>
              <IconButton>
                <BiTrash />
              </IconButton>
            </Tooltip>
          </TableCell>
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

export default OurStaffItem;
