import * as React from "react";
import { useState } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { BiReceipt } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";

import { styled } from "@mui/material/styles";

import "./TableItem.scss";
import { GetOrderItem } from "../../../pages/Orders/types";

const TableItem = ({ item }: { item: GetOrderItem }) => {
  const [selectedAction, setSelectedAction] = useState("Delivered");

  const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAction(e.target.value);
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <StyledTableRow>
      <StyledTableCell className="number">
        {item?.createdAt?.split("T")?.[0]}
      </StyledTableCell>
      <StyledTableCell className="time">{item?.customer?.name}</StyledTableCell>
      <StyledTableCell className="name">{item?.method}</StyledTableCell>
      <StyledTableCell className="amount">{item?.total}</StyledTableCell>
      <StyledTableCell className="status">{item?.status}</StyledTableCell>
      <StyledTableCell className="action">
        <Select
          value={selectedAction}
          onChange={handleActionChange}
          sx={{
            width: "80%",
            height: "30px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Cancel">Cancel</MenuItem>
        </Select>
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
  );
};

export default TableItem;
