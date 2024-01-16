import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";
import { ProductInfo } from "../../../pages/ProductsDashboard/types";
import { GetBrandItem } from "../../../pages/Brands/types";
import { getBase64 } from "../../../../../utils/convertToBase64";

interface Props {
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProduct = ({ setOpen, setUpdateList }: Props) => {
  const [err, setErr] = useState("");
  const [brandsList, setBrandsList] = useState<GetBrandItem[]>([]);
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);

  const schema = Yup.object({
    title: Yup.string().required("Produktun adi tələb olunur"),
    description: Yup.string().required("Produktun tesviri tələb olunur"),
    salePrice: Yup.number().required("Produktun satis qiymeti tələb olunur"),
    productPrice: Yup.number().required(
      "Produktun evvelki qiymeti tələb olunur"
    ),
    brandId: Yup.string().required("Produktun brandi tələb olunur"),
    stock: Yup.number().required(
      "Produktun hal-hazirda stockda olan sayi tələb olunur"
    ),
    images: Yup.mixed<File[] | string>().required(
      "Produktun shekili tələb olunur"
    ),
  }).required();

  useEffect(() => {
    if (token) {
      makeRequest("/dashboard/brands", "get", null, token).then((res) => {
        const data = res?.data as { data: GetBrandItem[] };
        setBrandsList(data?.data);
      });
    }
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      brandId: "",
      salePrice: 0,
      productPrice: 0,
      stock: 0,
      images: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values: ProductInfo) => {
    try {
      const base64ImgList = [];
      for (let i = 0; i < values.images.length; i++) {
        const base64Img = await getBase64(values.images[i] as File);
        base64ImgList.push(base64Img);
      }
      const body = { ...values, images: base64ImgList };
      const res = await makeRequest("/dashboard/products", "post", body, token);

      const data = res?.data as { data: unknown; success: boolean };
      const isSuccess = data && data?.success;
      if (isSuccess) {
        setErr("");
        setOpen(false);
        setUpdateList((prev) => !prev);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setErr(res.data?.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
          Add your Product information from here
        </Typography>
      </Box>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <TextField
          label="Brand Title/Name"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("title")}
        />
        {!!errors.title?.message && (
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        )}
        <TextareaAutosize
          placeholder="Product Description"
          minRows={4}
          style={{
            width: "100%",
            padding: "8px",
            overflow: "hidden",
          }}
          {...register("description")}
        />
        {!!errors.description?.message && (
          <p style={{ color: "red" }}>{errors.description?.message}</p>
        )}
        <input type="file" accept="image/*" multiple {...register("images")} />
        {!!errors?.images && (
          <p style={{ color: "red" }}>{errors.images?.message}</p>
        )}
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="brand-label">Brand</InputLabel>
          <Select label="Brand" labelId="brand-label" {...register("brandId")}>
            {brandsList.map((brand) => (
              <MenuItem key={brand?._id} value={brand?._id}>
                {brand?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {!!errors.brandId?.message && (
          <p style={{ color: "red" }}>{errors.brandId?.message}</p>
        )}
        <Box
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <InputLabel id="original-price-label">Product Price</InputLabel>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <TextField
              type="number"
              placeholder="Original Price"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              {...register("productPrice")}
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
              type="number"
              placeholder="Sale Price"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              {...register("salePrice")}
            />
          </Box>
        </Box>
        <TextField
          type="number"
          placeholder="Product Quantity"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          {...register("stock")}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
