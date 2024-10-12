import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SideBarItem } from './';
import { toggleDrawer } from '../../store/journal';
import { ClearOutlined } from '@mui/icons-material';

export const SideBar = ({drawerWidth = 240}) => {

    const dispatch = useDispatch();

    const { displayName } = useSelector(state => state.auth);

    const { notes, open } = useSelector(state => state.journal);

    const handleToggleDrawer = () => {
        dispatch(toggleDrawer());
    }

    const matches = useMediaQuery('(min-width: 600px)');

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant={matches ? 'permanent' : 'persistent'} // temporary
                open={open}
                sx={{
                    display: { sx: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >

                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>

                    <IconButton
                        color='inherit'
                        onClick={handleToggleDrawer}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <ClearOutlined />
                    </IconButton>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    );
}