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
import { GetProductItem } from "../../../pages/ProductsDashboard/types";
const label = { inputProps: { "aria-label": "Switch demo" } };

type Props = {
  item: GetProductItem;
  selectedItems: string[];
  handleCheckboxChange: (itemId: string) => void;
};

const ProductsItem = ({ item, selectedItems, handleCheckboxChange }: Props) => {
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
      name: "Admin",
      email: "admin@gmail.com",
      phoneNumber: "360-943-7332",
      registrationDate: "Dec 28, 2023",
      role: "Admin",
      status: "Active",
      switchChecked: true,
    },
  ];
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const url = item?.images?.[0] as { url: string };

  return (
    <TableBody>
      {/* {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row, index) => ( */}
      <TableRow>
        <TableCell>
          <Checkbox
            checked={selectedItems.includes(item._id)}
            onChange={() => handleCheckboxChange(item._id)}
          />
        </TableCell>
        <TableCell>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item>
              <Avatar alt={item?.title} src={url?.url} />
            </Grid>
            <Grid item>{item?.title}</Grid>
          </Grid>
        </TableCell>
        <TableCell>{item?.brandName}</TableCell>
        <TableCell>{item?.productPrice}</TableCell>
        <TableCell>{item?.salePrice}</TableCell>
        <TableCell>{item?.stock}</TableCell>
        <TableCell style={{ cursor: "pointer" }}>
          <GrView />
        </TableCell>
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
      {/* ))} */}
      {emptyRows > 0 && (
        <StyledTableRow style={{ height: 53 * emptyRows }}>
          <StyledTableCell colSpan={6} />
        </StyledTableRow>
      )}
    </TableBody>
  );
};

export default ProductsItem;
