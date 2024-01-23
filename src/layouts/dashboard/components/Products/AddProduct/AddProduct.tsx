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
  Switch,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";
import {
  GetProductItem,
  ProductInfo,
} from "../../../pages/ProductsDashboard/types";
import { GetBrandItem } from "../../../pages/Brands/types";
import { getBase64 } from "../../../../../utils/convertToBase64";
import { selectItem } from "../../../../../redux/slices/dashboard/selectedItemSlice";

interface Props {
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProduct = ({ setOpen, setUpdateList }: Props) => {
  const [err, setErr] = useState("");
  const [brandsList, setBrandsList] = useState<GetBrandItem[]>([]);
  const [imgList, setImgList] = useState<FileList | null>(null);
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const itemData = useSelector(
    (state: RootState) => state.selectedItem.itemData
  );
  const item = itemData?.item as GetProductItem;

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
    images: Yup.mixed<
      | File[]
      | {
          url: string;
          public_id: string;
        }[]
    >().test("fileCount", "Minimum iki shekil teleb olunur", (value) => {
      if (!value) {
        return false;
      }

      return value.length >= 2;
    }),
    isPublish: Yup.boolean().required(),
  }).required();

  useEffect(() => {
    if (token) {
      makeRequest("/dashboard/brands", "get", null, token).then((res) => {
        const data = res?.data as { data: GetBrandItem[] };
        setBrandsList(data?.data);
      });
    }
  }, [token]);

  useEffect(() => {
    return () => {
      dispatch(selectItem({ itemData: { item: null, status: "" } }));
    };
  }, []);

  const imagesList = item?.images as {
    url: string;
    public_id: string;
  }[];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      title: item?.title || "",
      description: item?.description || "",
      brandId: item?.brandId || "",
      salePrice: item?.salePrice || 0,
      productPrice: item?.productPrice || 0,
      stock: item?.stock || 0,
      images: imagesList || [],
      isPublish: item?.isPublish || false,
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values: ProductInfo) => {
    try {
      const base64ImgList = [];
      const imagePayload = [];
      for (let i = 0; i < values.images.length; i++) {
        if (!values.images[i]?.public_id) {
          const base64Img = await getBase64(values.images[i] as File);
          base64ImgList.push(base64Img);
        }
      }

      if (imagesList?.length) {
        imagePayload.push(...imagesList, ...base64ImgList);
      }

      const body = {
        ...values,
        images: imagePayload.length ? imagePayload : base64ImgList,
      };
      const res = await makeRequest(
        `/dashboard/products/${item?._id || ""}`,
        item?._id ? "put" : "post",
        body,
        token
      );

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

  const showNewImages = () => {
    if (imgList) {
      return imagesList
        ? imagesList?.length + imgList?.length >= 2
        : imgList?.length >= 2;
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
        <input
          type="file"
          id="images-file-upload"
          accept="image/*"
          multiple
          style={{
            display: "none",
          }}
          onChange={(e) => {
            const files = e.target.files;
            if (imagesList) {
              setValue("images", [
                ...imagesList,
                ...Array.from(files as FileList),
              ] as unknown as File[]);
            } else {
              setValue(
                "images",
                Array.from(files as FileList) as unknown as File[]
              );
            }
            setImgList(files);
          }}
        />
        <label
          htmlFor="images-file-upload"
          style={{
            width: "130px",
            padding: "14px ",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload Images
        </label>
        {imagesList?.length ? (
          <div style={{ display: "flex", gap: "5px" }}>
            {imagesList?.map((image, index) => (
              <img
                key={`${image.public_id}-${index}`}
                alt={"product"}
                style={{ width: 50 }}
                src={image?.url}
              />
            ))}
          </div>
        ) : null}

        {showNewImages() && imgList ? (
          <div style={{ display: "flex", gap: "5px" }}>
            {Array.from(imgList)?.map((image, index) => (
              <img
                key={`${image.name}-${index}`}
                alt={image.name}
                style={{ width: 50 }}
                src={URL.createObjectURL(image)}
              />
            ))}
          </div>
        ) : null}

        {!!errors?.images && (
          <p style={{ color: "red" }}>{errors.images?.message}</p>
        )}
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="brand-label">Brand</InputLabel>
          <Select
            label="Brand"
            labelId="brand-label"
            {...register("brandId")}
            defaultValue={item?.brandId}
          >
            {brandsList?.map((brand) => (
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
        <InputLabel id="sale-price-label">Stock Amount</InputLabel>
        <TextField
          type="number"
          placeholder="Product Quantity"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          {...register("stock")}
        />
        <InputLabel id="sale-price-label">Product is Published</InputLabel>
        <Switch {...register("isPublish")} />
        {err && <p style={{ color: "red" }}>{err}</p>}
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={!isValid || !isDirty}
        >
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
