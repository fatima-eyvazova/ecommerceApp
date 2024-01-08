import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const AddProduct = () => {
  return (
    <Box style={{ padding: "50px", width: "40vw" }}>
      <Box>
        <Typography
          variant="h4"
          style={{
            paddingBottom: "10px",
            fontFamily: "serif",
            fontSize: "24px",
            fontWeight: "600",
            color: "blue",
          }}
        >
          Add Product
        </Typography>
        <Typography
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
          }}
        >
          Add your product and necessary information from here
        </Typography>
      </Box>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          label="Product Title/Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Product Title/Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextareaAutosize
          name="description"
          placeholder="Product Description"
          minRows={4}
          style={{ width: "100%", padding: "8px", overflow: "hidden" }}
        />
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="brand-label">Brand</InputLabel>
          <Select label="Brand" labelId="brand-label">
            <MenuItem value="nike">Nike</MenuItem>
            <MenuItem value="gucci">Gucci</MenuItem>
            <MenuItem value="zara">Zara</MenuItem>
            <MenuItem value="bershika">Bershika</MenuItem>
            <MenuItem value="stradivarius">Stradivarius</MenuItem>
          </Select>
        </FormControl>
        <Box
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <InputLabel id="original-price-label">Product Price</InputLabel>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <TextField
              type="text"
              placeholder="Original Price"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </Box>
        </Box>
        <Box
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <InputLabel id="sale-price-label">Sale Price</InputLabel>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <TextField
              type="text"
              placeholder="Sale Price"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </Box>
        </Box>
        <TextField
          type="text"
          placeholder="Product Quantity"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button variant="contained" color="primary" size="large">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
