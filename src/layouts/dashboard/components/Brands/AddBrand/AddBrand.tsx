import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";
import { getBase64 } from "../../../../../utils/convertToBase64";

interface FormValues {
  name: string;
  image: File[] | string;
}

interface Props {
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBrand = ({ setOpen, setUpdateList }: Props) => {
  const [err, setErr] = useState("");
  const [url, setUrl] = useState("");
  const { token } = useSelector((state: RootState) => state.auth);
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
      name: "",
      image: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values: FormValues) => {
    try {
      const imgBase64 = await getBase64(values.image[0] as File);
      const res = await makeRequest(
        "/dashboard/brands",
        "post",
        { name: values.name, image: imgBase64 },
        token
      );

      const data = res.data as { data: unknown; success: boolean };
      const isSuccess = data && data?.success;
      console.log(data);
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
            type="file"
            size={fourMb}
            multiple={false}
            onChange={(e) => {
              const img = e.target.files as unknown as File[];
              setValue("image", img);
              setUrl(URL.createObjectURL(img?.[0]));
              setErr("");
            }}
          />
          {!!errors.image?.message && (
            <p style={{ color: "red" }}>{errors.image?.message}</p>
          )}
          {url && <img src={url} alt="Brand Image" style={{ height: 400 }} />}
          {err && <p style={{ color: "red" }}>{err}</p>}
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={!isValid || isLoading || !isDirty}
        >
          Add Brand
        </Button>
      </form>
    </Box>
  );
};

export default AddBrand;
