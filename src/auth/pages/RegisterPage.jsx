import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <form>
                <Grid2 container>
                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Full name"
                            type="text"
                            placeholder="Full name"
                            fullWidth
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@example.com"
                            fullWidth
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                        />
                    </Grid2>

                    <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 3 }}>
                        <Grid2 size={{ xs: 12 }}>
                            <Button variant="contained" fullWidth>
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
