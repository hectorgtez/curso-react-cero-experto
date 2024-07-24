import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: 'correo@correo.com',
  password: '123456',
  displayName: 'Hector Gutierrez'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Email must have a @'],
  password: [(value) => value.length >= 6, 'Password must have more than 6 characters'],
  displayName: [(value) => value.length >= 1, 'Name is required'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Create account'>
      <form onSubmit={ onSubmit }>
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
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
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
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
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
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>

            <Grid
              item
              xs={ 12 }
            >
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={ isCheckingAuthentication }
              >
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
