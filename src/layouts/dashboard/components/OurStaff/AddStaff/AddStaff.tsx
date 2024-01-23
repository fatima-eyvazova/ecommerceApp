import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Button,
  Grid,
} from "@mui/material";

import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";

interface FormValues {
  name: string;
  email: string;
  surname: string;
  password: string;
}

interface Props {
  setOpen: (bool: boolean) => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddStaff = ({ setOpen, setUpdateList }: Props) => {
  const [err, setErr] = useState("");
  const { token } = useSelector((state: RootState) => state.auth);

  const schema = Yup.object({
    name: Yup.string().required("Adminin adi tələb olunur"),
    surname: Yup.string().required("Adminin soyadi tələb olunur"),
    email: Yup.string().email().required("Adminin emaili tələb olunur"),
    password: Yup.string().required("Password tələb olunur"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      surname: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values: FormValues) => {
    try {
      const res = await makeRequest(
        "/dashboard/register",
        "post",
        {
          name: values.name,
          email: values.email,
          surname: values.surname,
          password: values.password,
        },
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

  const isBtnDisabled = !isValid || isLoading || !isDirty;

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
          Add necessary information for registering an admin from here
        </Typography>
      </Box>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          {...register("name")}
        />
        {!!errors.name?.message && (
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        )}

        <TextField
          label="Surname"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          {...register("surname")}
        />
        {!!errors.surname?.message && (
          <p style={{ color: "red" }}>{errors.surname?.message}</p>
        )}

        <TextField
          id="email-input"
          type="text"
          label="Email"
          variant="outlined"
          fullWidth
          required
          {...register("email")}
        />
        {!!errors.email?.message && (
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        )}

        <TextField
          id="email-input"
          type="text"
          label="Password"
          variant="outlined"
          fullWidth
          required
          {...register("password")}
        />
        {!!errors.password?.message && (
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        )}

        {err && <p style={{ color: "red" }}>{err}</p>}

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={isBtnDisabled}
        >
          Add Staff
        </Button>
      </form>
    </Box>
  );
};

export default AddStaff;
