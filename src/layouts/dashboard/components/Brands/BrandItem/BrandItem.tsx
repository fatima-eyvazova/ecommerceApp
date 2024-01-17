import React, { useState } from "react";
// import { GrView } from "react-icons/gr";
import { BiPencil, BiTrash } from "react-icons/bi";
// import { styled } from "@mui/material/styles";
import {
  TableBody,
  // tableCellClasses,
  TableRow,
  TableCell,
  Tooltip,
  IconButton,
  Grid,
  Checkbox,
  // Modal,
} from "@mui/material";
import { GetBrandItem } from "../../../pages/Brands/types";
import { useDispatch } from "react-redux";
import { selectItem } from "../../../../../redux/slices/dashboard/selectedItemSlice";
import { DeleteModal } from "../../../components";
// const label = { inputProps: { "aria-label": "Switch demo" } };

interface Props {
  item: GetBrandItem;
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItems: string[];
  handleCheckboxChange: (itemId: string) => void;
}

const BrandItem = ({
  item,
  setOpen,
  setUpdateList,
  selectedItems,
  handleCheckboxChange,
}: Props) => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [confirmOpen, setConfirmOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //     fontWeight: "bold",
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  //   minWidth: "120px",
  // }));

  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   "&:last-child td, &:last-child th": {
  //     border: 0,
  //   },
  // }));

  const setSelectedItem = (status: "edit" | "view" | "delete") => {
    setOpen(true);
    dispatch(selectItem({ itemData: { item, status } }));
  };

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
            <img
              src={item?.image?.url}
              alt="brand"
              style={{ height: 30, width: 30 }}
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

        <TableCell>
          <Tooltip title="Edit" arrow>
            <IconButton onClick={() => setSelectedItem("edit")}>
              <BiPencil
                style={{
                  cursor: "pointer",
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete" arrow onClick={() => setOpenModal(true)}>
            <IconButton>
              <BiTrash />
            </IconButton>
          </Tooltip>
          {openModal && (
            <DeleteModal
              setOpenModal={setOpenModal}
              setUpdateList={setUpdateList}
              itemId={item._id}
              resource="brands"
            />
          )}
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
