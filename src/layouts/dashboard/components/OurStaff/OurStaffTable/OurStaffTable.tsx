import * as React from "react";
// mui
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { OurStaffItem } from "../..";
import { GetAdmin } from "../../../pages/OurStaff/types";

interface Props {
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  list: GetAdmin[];
}

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

const OurStaffTable = ({ setUpdateList, list }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Surname</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Joining Date</StyledTableCell>
            <StyledTableCell align="left">Role</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {Array.isArray(list)
          ? list.map((admin) => (
              <OurStaffItem admin={admin} setUpdateList={setUpdateList} />
            ))
          : []}
      </Table>
    </TableContainer>
  );
};

export default OurStaffTable;
