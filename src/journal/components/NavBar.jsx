import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = ({drawerWidth}) => {
    return (
        <AppBar 
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px) `},
                ml: { sm: `${drawerWidth}px`}
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherited'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none'}}}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid2 container direction='row' justifyContent='space-between' size={12} alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}