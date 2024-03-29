import * as React from "react";
// mui
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  TableHead,
  TableFooter,
  Table,
  TableContainer,
  TablePagination,
  Checkbox,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
// react icons
import { BiReceipt } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";

import BrandItem from "../BrandItem/BrandItem";
import { GetBrandItem } from "../../../pages/Brands/types";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const TablePaginationActions: React.FC<TablePaginationActionsProps> = (
  props
) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
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

interface Props {
  list: GetBrandItem[];
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const BrandsTable = ({
  list,
  setOpen,
  setUpdateList,
  selectedItems,
  setSelectedItems,
}: Props) => {
  const handleCheckboxChange = (itemId: string) => {
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedSelectedItems);
  };

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
  ];

  function selectCheckboxes() {
    if (selectedItems.length === list.length) {
      setSelectedItems([]);
    } else {
      const allItemIds = list.map((item) => item._id);
      setSelectedItems(allItemIds);
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox
                style={{ backgroundColor: "white" }}
                checked={selectedItems.length === list.length}
                onChange={() => {
                  selectCheckboxes();
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="left">Icon</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {Array.isArray(list)
          ? list.map((item) => (
              <BrandItem
                key={item?._id}
                item={item}
                setOpen={setOpen}
                setUpdateList={setUpdateList}
                selectedItems={selectedItems}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))
          : []}
      </Table>
    </TableContainer>
  );
};

export default BrandsTable;
