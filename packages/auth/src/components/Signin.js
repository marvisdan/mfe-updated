import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link sx={{ textDecoration: 'none', }} color="inherit" to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({ onSignIn }) {

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar sx={[{
          m: 1,
        },
        (theme) => ({
          backgroundColor: theme.palette.secondary.main,
        })]
        }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          sx={{
            width: 1,
            mt: 3,
          }}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
            }}
            onClick={onSignIn}
          >
            Sign In
          </Button>
          <Grid container sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Grid item>
              <Link sx={{ textDecoration: 'none', }} to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
