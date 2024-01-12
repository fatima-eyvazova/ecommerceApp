import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

const AddBrand = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
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
          Add Brand
        </Typography>
        <Typography
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
          }}
        >
          Add your Product brand and necessary information from here
        </Typography>
      </Box>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          label="Brand Title/Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextareaAutosize
          name="description"
          placeholder="Brand Description"
          minRows={4}
          style={{
            width: "100%",
            padding: "8px",
            overflow: "hidden",
          }}
        />
        <div className="App">
          <h2>Add Image:</h2>
          <input type="file" onChange={handleChange} />
          <img src={file} />
        </div>
        {/* <Box
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
        /> */}
        <Button variant="contained" color="primary" size="large">
          Add Brand
        </Button>
      </form>
    </Box>
  );
};

export default AddBrand;
