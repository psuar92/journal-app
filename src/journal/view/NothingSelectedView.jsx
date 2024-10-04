import { MenuBookOutlined } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid2 container
            spacing={0}
            direction='column'
            align='center'
            justifyContent='center'
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid2 size={12}>
                <MenuBookOutlined sx={{ fontSize: 100, color: 'white'}}/>
            </Grid2>

            <Grid2 size={12}>
                <Typography color='white' variant='h5'>Select or create an entry</Typography>
            </Grid2>

        </Grid2>
    );
}