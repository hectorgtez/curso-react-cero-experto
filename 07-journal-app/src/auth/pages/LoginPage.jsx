import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticated = useMemo( () => status === 'checking', [status] );

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title='Login'>
      <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={ onSubmit }
      >
        <Grid container>
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
              name='email'
              value={ email }
              onChange={ onInputChange }
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
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          {/* Errors */}
          <Grid
            container
            display={ !!errorMessage ? '' : 'none' }
            sx={{ mt: 1 }}
          >
            <Grid
              item
              xs={ 12 }
            >
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>
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
              sm={ 6 }
            >
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={ isAuthenticated }
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>
            
            <Grid
              item
              xs={ 12 }
              sm={ 6 }
            >
              <Button
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticated }
              >
                <Google/>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link
              component={ RouterLink }
              color='inherit'
              to='/auth/register'
            >
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
