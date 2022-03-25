import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: '100%',
            height: '100vh',
          },
        }}
      >
        <Paper elevation={2}>
          <Card sx={{ height:400, m:'auto', position:'relative',top:'25%'}}>
            <CardContent  sx={{position:'relative',top:'30%', textAlign:'center'}}>
              <Typography variant="h2" component="div">
                Unauthorized
              </Typography>
              <Typography variant="body2">
                You do not have access to the requested page.
              </Typography>
              <Button variant="contained" onClick={goBack} sx={{mt:3}}>
                Go Back
              </Button>
            </CardContent>
          </Card>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Unauthorized;
