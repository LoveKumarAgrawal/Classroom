import { FC } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const loginPageStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mt: 8,
};

const formStyles: SxProps<Theme> = {
  mt: 1,
};

const LoginPage: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={loginPageStyles}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          sx={formStyles}
          noValidate
          autoComplete="off"
        >
          <TextField
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
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
