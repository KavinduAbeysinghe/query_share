import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import CustomInputField from "../../components/CustomInputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Google } from "@mui/icons-material";
import PrimaryButton from "../../components/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const theme = useTheme();
  const commonError = "Field is required";

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(commonError),
    password: yup.string().required(commonError),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleForgotPassword = () => {};

  const handleSignUp = () => {};

  return (
    <Box display={"flex"} sx={{ width: "100vw", height: "100vh" }}>
      <Grid container sx={{ flexGrow: 1, p: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            backgroundColor: "#4253F0",
            borderRadius: "20px",
            p: 5,
            color: "#fff",
          }}
        >
          <Typography variant={"h4"} fontWeight={400}>
            Welcome to
          </Typography>
          <Typography variant={"h2"} fontWeight={800}>
            Query Share
          </Typography>
          {/* <Box
            mt={3}
            mb={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "250px" }}
              className="logo-img"
            />
          </Box> */}
          <Box
            sx={{
              p: 3,
              backgroundColor: "#2420E2",
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              display: "inline-block",
            }}
            mt={5}
          >
            <Typography fontWeight={800} textAlign={"center"}>
              Your Gateway to Engaging Discussions!
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            [theme.breakpoints.up("sm")]: { p: theme.spacing(0) },
            [theme.breakpoints.up("md")]: { p: theme.spacing(5) },
          }}
        >
          <Box
            sx={{
              margin: "auto",
              maxWidth: "500px",
            }}
          >
            <Typography variant={"h4"} fontWeight={700} textAlign={"center"}>
              Welcome Back
            </Typography>
            <Typography variant={"h5"} fontWeight={400} sx={{ mt: 3 }}>
              Sign In to continue
            </Typography>
            <form className="form-container">
              <Grid container flexDirection={"column"}>
                <Grid item mt={5}>
                  <CustomInputField
                    label={"Email"}
                    register={register("email")}
                    errors={!!errors?.email?.message}
                    helperText={errors?.email?.message?.toString()}
                    disabled={false}
                    id={"email"}
                    placeholder={"someone@example.com"}
                  />
                </Grid>
                <Grid item mt={3}>
                  <CustomInputField
                    label={"Password"}
                    register={register("password")}
                    errors={!!errors?.password?.message}
                    helperText={errors?.password?.message?.toString()}
                    disabled={false}
                    id={"password"}
                    placeholder={"Your password here"}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <FontAwesomeIcon icon={faEye} color="#C1C1C1" />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                color="#C1C1C1"
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    textAlign={"end"}
                    color={"#4253F0"}
                    onClick={handleForgotPassword}
                    sx={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Typography>
                </Grid>
                <Grid item mt={5}>
                  <PrimaryButton
                    type={"submit"}
                    buttonText={"LOGIN"}
                    onClick={handleSubmit(onSubmit)}
                    variant="contained"
                  />
                </Grid>
                <Grid item mt={3}>
                  <PrimaryButton
                    buttonText="Sign In with Google"
                    variant="outlined"
                    startIcon={<Google />}
                  />
                </Grid>
                <Grid item textAlign={"center"} mt={3}>
                  <Typography sx={{ color: "gray" }}>
                    Don't have an acoount?{" "}
                    <span
                      style={{ color: "#4253F0", cursor: "pointer" }}
                      onClick={handleSignUp}
                    >
                      Sign Up Now!
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
