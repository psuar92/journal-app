import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidator = {
    email: [ (value) => value.includes('@'), 'Insert a valid email' ],
    password: [ (value) => value.length >= 6, 'Password must have at least 6 characters' ],
    displayName: [ (value) => value.length >= 1, 'The name is required' ],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth)

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formData, formValidator);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid2 container>
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Full name"
                            type="text"
                            placeholder="Full name"
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            placeholder="email@example.com"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid2>

                    <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 3 }}>
                        <Grid2 
                            size={{ xs: 12 }}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid2>

                        <Grid2 size={{ xs: 12 }}>
                            <Button 
                                fullWidth
                                variant="contained" 
                                type="submit"
                                disabled={isAuthenticating}
                            >
                                Create account
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container size={12} direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            sign in
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
};
