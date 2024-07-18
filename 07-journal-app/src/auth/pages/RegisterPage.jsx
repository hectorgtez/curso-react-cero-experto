import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Create account'>
      <form>
        <Grid container>
          {/* Full Name */}
          <Grid
            item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label='Full Name'
              type='text'
              placeholder='John Doe'
              fullWidth
            />
          </Grid>

          {/* Email */}
          <Grid
            item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label='Email'
              type='email'
              placeholder='example@email.com'
              fullWidth
            />
          </Grid>

          {/* Password */}
          <Grid
            item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label='Password'
              type='password'
              fullWidth
            />
          </Grid>

          {/* Buttons */}
          <Grid
            container
            spacing={ 2 }
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid
              item
              xs={ 12 }
            >
              <Button variant='contained' fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link
              component={ RouterLink }
              color='inherit'
              to='/auth/login'
            >
              Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
