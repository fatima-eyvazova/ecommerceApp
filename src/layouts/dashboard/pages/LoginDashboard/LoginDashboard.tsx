import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeRequest } from "../../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../router/routeNames";

interface FormValues {
  email: string;
  password: string;
}
const LoginDashboard = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const schema = Yup.object({
    email: Yup.string()
      .email("Bu e-poçt olmalıdır")
      .required("E-poçt tələb olunur"),
    password: Yup.string()
      .required("Parol tələb olunur")
      .min(6, "Parol 6 simvoldan ibarət olmalıdır"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    const res = await makeRequest("/login", "post", values);
    console.log(res);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isSuccess = res.data && res.data?.success;
    if (isSuccess) {
      navigate(ROUTES.orders);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setErr(res.data?.message);
    }
  };

  return (
    <>
      <div className="login">
        <div
          className="register-childe"
          style={{
            width: isSmallScreen ? "100%" : "400px",
            margin: "auto",
            padding: "16px",
          }}
        >
          <Typography
            className="mt-32 text-4xl font-extrabold tracking-tight leading-tight text-center"
            mb={5}
            style={{
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
              marginBottom: isSmallScreen ? "20px" : "40px",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: "700",
              fontSize: isSmallScreen ? "20px" : "23px",
            }}
          >
            Giris Et
          </Typography>
          <form
            name="registerForm"
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              className="mb-24"
              id="standard-start-adornment"
              label="Email"
              variant="outlined"
              required
              fullWidth
              error={!!errors.email}
              {...register("email")}
            />
            {!!errors.email?.message && (
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            )}
            <TextField
              className="mb-24"
              id="standard-start-adornment"
              label="Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              error={!!errors.password}
              {...register("password")}
            />
            {!!errors.password?.message && (
              <p style={{ color: "red" }}>{errors.password?.message}</p>
            )}
            {err && <p>{err}</p>}
            <Button
              variant="contained"
              color="secondary"
              className=" w-full mt-24"
              aria-label="Register"
              type="submit"
              size="large"
              style={{
                opacity: !isValid ? 0.5 : 1,
                backgroundColor: "#1F75FE",
                color: "#fff",
                fontSize: isSmallScreen ? "0.9rem" : "1rem",
                fontWeight: 700,
                lineHeight: 1,
                padding: "5px 15px",
                marginTop: "20px",
                borderRadius: "100px",
                height: "50px",
              }}
              disabled={!isValid || isLoading || !isDirty}
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginDashboard;
