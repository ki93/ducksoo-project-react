import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import LoginImg from "../image/loginImg3.png";
import Copyright from "../components/common/Copyright"

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/main";
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let username = data.get("inputId");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });

    console.log({
      id: data.get("inputId"),
      password: data.get("inputPw"),
    });
    axios
      .post(
        "/login",
        {
          id: data.get("inputId"),
          pw: data.get("inputPw"),
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Err");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[100]
                : t.palette.grey[900],
            backgroundSize: "45%",
            backgroundPosition: "center",
          }}
        >
          {/* <img
            src={Ducksoo}
            className="img-fluid"
            className="loginContentLogoImg"
            alt="..."
            style={{ maxWidth: "24rem" }}
          />{" "} */}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleLoginSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="inputId"
                label="Id"
                name="inputId" //data get
                autoComplete="inputId"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="inputPw"
                label="Password"
                type="password"
                id="inputPw"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}