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
  Tooltip,
  IconButton,
  Grid,
  Checkbox,
} from "@mui/material";
import { GetBrandItem } from "../../../pages/Brands/types";

const label = { inputProps: { "aria-label": "Switch demo" } };

const BrandItem = ({ item }: { item: GetBrandItem }) => {
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

  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableBody>
      {/* {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row, index) => ( */}
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={item?.image?.url}
              alt="brand"
              style={{ height: 100, width: 100 }}
            />
          </Grid>
        </TableCell>
        <TableCell>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item>{item?.name}</Grid>
          </Grid>
        </TableCell>
        {/* <TableCell>{row.email}</TableCell>
          <TableCell>{row.phoneNumber}</TableCell>
          <TableCell>{row.registrationDate}</TableCell> */}
        <TableCell>
          <Tooltip title="View" arrow>
            <IconButton>
              <GrView />
            </IconButton>
          </Tooltip>
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
      {/* ))} */}
      {/* {emptyRows > 0 && (
        <StyledTableRow style={{ height: 53 * emptyRows }}>
          <StyledTableCell colSpan={6} />
        </StyledTableRow>
      )} */}
    </TableBody>
  );
};

export default BrandItem;
