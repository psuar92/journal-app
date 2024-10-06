import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth }) => {

    const dispatch = useDispatch();

    const { photoURL } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid2 container direction='row' size={12} justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                    <Grid2>
                        <Grid2 container alignItems='center' spacing={2}>
                            <Grid2>
                                <Avatar src={photoURL} sx={{ width: 40, height: 40, borderRadius: '50%' }} />
                            </Grid2>
                            <Grid2>
                                <IconButton color='error' onClick={onLogout}>
                                    <LogoutOutlined />
                                </IconButton>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}