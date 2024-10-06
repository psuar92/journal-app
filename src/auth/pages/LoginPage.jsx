import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

    const {status} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const {email, password, onInputChange} = useForm({
        email: 'pedro@gmail.com',
        password: '123456'
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid2 container>
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label='Email'
                            placeholder='email@example.com'
                            type='email'
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            autoComplete='off'
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label='Password'
                            type='password'
                            placeholder='password'
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid2>

                    <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 3 }}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button 
                                fullWidth
                                type='submit' 
                                variant='contained'
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button 
                                fullWidth
                                variant='contained' 
                                onClick={onGoogleSignIn}
                                disabled={isAuthenticating}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container size={12} direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>Don't have an account?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>
                            sign up
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
};
