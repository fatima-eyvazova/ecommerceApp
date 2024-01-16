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
  Grid,
} from "@mui/material";

const AddStaff = () => {
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
          Add Staff
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

        <TextareaAutosize
          name="description"
          placeholder="Product Description"
          minRows={4}
          style={{
            width: "100%",
            padding: "8px",
            overflow: "hidden",
          }}
        />
        <div>
          <input type="file" accept="image/*" multiple />
          <Button variant="contained" color="primary">
            Process Images
          </Button>

          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              {/* <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={URL.createObjectURL()}
                  alt={"Image"}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                  >
                    Image {index + 1}
                  </Typography>
                </CardContent>
              </Card> */}
            </Grid>
          </Grid>
        </div>
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="brand-label">Brand</InputLabel>
          <Select label="Brand" labelId="brand-label">
            <MenuItem></MenuItem>
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          // disabled={isBtnDisabled}
        >
          Add Staff
        </Button>
      </form>
    </Box>
  );
};

export default AddStaff;
