import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import './signin.css'; 

const defaultTheme = createTheme();

export default function SignIn() {
  const {t,i18n} = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" className="signin-main">
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5}  elevation={6} square className="signin-grid-item">
          <Box className="signin-box">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("signIn")}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} className="signin-form">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t("email")}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t("password")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t("rememberMe")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="signin-button"
              >
                {t("signIn")}
              </Button>
              <Grid container className='grid-container'>
                <Grid item xs>
                  <Link href="#" variant="body2">
                   {t("forgotPassword")}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='./signup/Signup' variant="body2">
                  {t("dontHaveAccount")}

                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box className='button2'>
            <Button variant="contained" onClick={() => changeLanguage('en')} className='button3'>English</Button>
            <Button variant="contained" onClick={() => changeLanguage('ar')}>Arabic</Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
