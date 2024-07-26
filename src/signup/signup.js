import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import './signup.css';
import { useLocation } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
  const location = useLocation();
  const pathname = location.pathname.split('/')
  const firstsegment = pathname[1]
  console.log(firstsegment)
  React.useEffect(()=>{
    console.log('run')
    setTimeout(() => {
      if (firstsegment  == 'signup') {
        i18n.changeLanguage('ar');  
      }
      else{
        i18n.changeLanguage('en');  
      }      
    }, 0.000001);

  },[])
  const { t, i18n } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'), 
    });
  };
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage('en');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className='box1'>
          <Avatar sx={{  bgcolor: 'secondary.main' }} className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {t('signup')}Signup
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} className='box2'>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={t('firstName')}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={t('lastName')}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t('email')}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label={t('phoneNumber')}
                  name="Phone Number"
                  autoComplete="Phone Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t('password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm Password"
                  label={t('confirm password')}
                  type="password"
                  id="Confirm Password"
                  autoComplete="Confirm Password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={t('receiveUpdates')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
             className='Button'
            >
              {t('signup')}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                {t('already have account')}
                </Link>
              </Grid>
            </Grid>
          </Box>
          {/* <Box className='button'>
            <Button variant="contained" onClick={() => changeLanguage('en')} className='button2'>English</Button>
            <Button variant="contained" onClick={() => changeLanguage('ar')}>Arabic</Button>
          </Box> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}