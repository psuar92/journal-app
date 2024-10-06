import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
    email: 'pedro@mail.com',
    password: '123456',
    displayName: 'Pedro Suarez'
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'Insert a valid email' ],
    password: [ (value) => value.length >= 6, 'Password must have at least 6 characters' ],
    displayName: [ (value) => value.length >= 1, 'The name is required' ],
}

export const RegisterPage = () => {

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formData, formValidations);



    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit}>
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
                            error={!displayNameValid}
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
                        />
                    </Grid2>

                    <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 3 }}>
                        <Grid2 size={{ xs: 12 }}>
                            <Button 
                                fullWidth
                                variant="contained" 
                                type="submit"
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
