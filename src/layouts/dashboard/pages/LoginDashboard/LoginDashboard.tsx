import { useState } from "react";
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

interface FormValues {
  name: string;
  email: string;
  password: string;
}
const LoginDashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [linkIsSent, setLinkIsSent] = useState(false);

  const schema = Yup.object({
    name: Yup.string()
      .min(2)
      .required("Ad tələb olunur")
      .matches(/^[A-Za-z]+$/, "Ad yalnız hərflərdən ibarət olmalıdır"),
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
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (values: FormValues) => {
    console.log(values);
    setLinkIsSent(true);
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
            Qeydiyyat
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
              label="Ad"
              required
              fullWidth
              error={!!errors.name}
              {...register("name")}
            />
            {!!errors.name?.message && (
              <p style={{ color: "red" }}>{errors.name?.message}</p>
            )}
            <TextField
              className="mb-24"
              id="standard-start-adornment"
              label="Email"
              variant="outlined"
              required
              fullWidth
              error={!!errors.name}
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
              error={!!errors.name}
              {...register("password")}
            />
            {!!errors.password?.message && (
              <p style={{ color: "red" }}>{errors.password?.message}</p>
            )}
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
              disabled={!isValid}
            >
              Qeydiyyatdan keçmək
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginDashboard;
