import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";
import { getBase64 } from "../../../../../utils/convertToBase64";
import { selectItem } from "../../../../../redux/slices/dashboard/selectedItemSlice";
import { GetBrandItem } from "../../../pages/Brands/types";

// import Input from "@mui/material/Input";
// import InputAdornment from "@mui/material/InputAdornment";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface FormValues {
  name: string;
  image: File[] | string;
}

interface Props {
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddEditBrand = ({ setOpen, setUpdateList }: Props) => {
  const [err, setErr] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const itemData = useSelector(
    (state: RootState) => state.selectedItem.itemData
  );
  const item = itemData?.item as GetBrandItem;
  const oneMb = 1048576;
  const fourMb = oneMb * 4;

  const schema = Yup.object({
    name: Yup.string().required("Brandin adi tələb olunur"),
    image: Yup.mixed<File[] | string>().required(
      "Brandin shekili tələb olunur"
    ),
  }).required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isLoading, isDirty },
  } = useForm({
    defaultValues: {
      name: item?.name || "",
      image: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values: FormValues) => {
    try {
      let res;
      if (!itemData.item) {
        const imgBase64 = await getBase64(values.image[0] as File);
        res = await makeRequest(
          "/dashboard/brands",
          "post",
          { name: values.name, image: imgBase64 },
          token
        );
      }

      if (itemData?.status === "edit") {
        let imgBase64 = "";
        if (values.image[0] && typeof values.image[0] !== "string") {
          imgBase64 = (await getBase64(values.image[0] as File)) as string;
        }

        const body: { name: string; image?: string } = {
          name: values.name,
        };

        if (imgBase64) {
          body.image = imgBase64;
        }

        res = await makeRequest(
          `/dashboard/brands/${itemData?.item?._id}`,
          "put",
          body,
          token
        );
      }

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

  useEffect(() => {
    setUrl(item?.image?.url || "");
  }, [item?.image?.url]);

  useEffect(() => {
    return () => {
      dispatch(selectItem({ itemData: { item: null, status: "" } }));
    };
  }, []);

  const isBtnDisabled =
    !isValid || isLoading || (!isDirty && itemData?.status !== "edit");

  const imagePreviewStyle = {
    width: "100px",
    height: "100px",
    border: "2px dashed #dcdee3",
    margin: "3px",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    userSelect: "none",
    opacity: 0.3,
    cursor: "pointer",
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
          {`${itemData?.status === "edit" ? "Update" : "Add"}`} Brand
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
      <form
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <TextField
          label="Brand Title/Name"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("name")}
        />
        {!!errors.name?.message && (
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        )}
        <div className="App">
          <h2>Add Image:</h2>
          <input
            id="images-file-upload"
            type="file"
            style={{
              display: "none",
              width: "200px",
            }}
            size={fourMb}
            multiple={false}
            onChange={(e) => {
              const img = e.target.files as unknown as File[];
              setValue("image", img);
              setUrl(URL.createObjectURL(img?.[0]));
              setErr("");
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

          {!!errors.image?.message && (
            <p style={{ color: "red" }}>{errors.image?.message}</p>
          )}
          {url && <img src={url} alt="Brand Image" style={{ height: 400 }} />}
          {err && <p style={{ color: "red" }}>{err}</p>}
        </div>
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={isBtnDisabled}
        >
          Add Brand
        </Button>
      </form>
    </Box>
  );
};

export default AddEditBrand;
