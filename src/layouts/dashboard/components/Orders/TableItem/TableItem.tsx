import * as React from "react";
import { useState } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { BiReceipt } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";

import "./TableItem.scss";
import { GetOrderItem } from "../../../pages/Orders/types";
import { makeRequest } from "../../../../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";

interface TableItemProps {
  setList: React.Dispatch<React.SetStateAction<GetOrderItem[]>>;
  item: GetOrderItem;
}

const TableItem: React.FC<TableItemProps> = ({
  item,
  setList,
}: TableItemProps) => {
  const [selectedAction, setSelectedAction] = useState("Delivered");
  const token = useSelector((state: RootState) => state.auth.token);

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

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await makeRequest(
        `/dashboard/orders/${orderId}`,
        "put",

        { status: newStatus },
        token
      );
      setList((orders) =>
        orders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

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
          sx={{
            width: "80%",
            height: "30px",
            borderRadius: "4px",
            fontSize: "14px",
          }}
          value={selectedAction}
          onChange={(e) => {
            setSelectedAction(e.target.value);
            handleStatusChange(item._id, e.target.value);
          }}
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="delivered">Delivered</MenuItem>
          <MenuItem value="processing">Processing</MenuItem>
          <MenuItem value="cancel">Cancel</MenuItem>
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
