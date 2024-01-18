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
import { RootState } from "../../../../../redux/types";
import { useSelector } from "react-redux";
import { makeRequest } from "../../../../../services/api";
import { GetAdmin } from "../../../pages/OurStaff/types";
import { DeleteModal } from "../..";

const label = { inputProps: { "aria-label": "Switch demo" } };

type Props = {
  admin: GetAdmin;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
};

const OurStaffItem = ({ admin, setUpdateList }: Props) => {
  const [openModal, setOpenModal] = React.useState(false);
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

  return (
    <>
      <TableBody>
        {/* {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row, index) => ( */}
        <TableRow>
          <TableCell>
            <Grid item>{admin?.name}</Grid>
          </TableCell>
          <TableCell>
            <Grid item>{admin?.surname}</Grid>
          </TableCell>
          <TableCell>{admin?.email}</TableCell>
          <TableCell>{admin?.createdAt?.split("T")?.[0] || ""}</TableCell>
          <TableCell>{admin?.role}</TableCell>
          <TableCell>
            <Tooltip title="Delete" arrow onClick={() => setOpenModal(true)}>
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
      {openModal && (
        <DeleteModal
          setOpenModal={setOpenModal}
          setUpdateList={setUpdateList}
          itemId={admin?._id}
          resource="users"
        />
      )}
    </>
  );
};

export default OurStaffItem;
