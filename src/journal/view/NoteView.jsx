import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
    return (
        <Grid2 container 
            className='animate__animated animate__fadeIn animate__faster'
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ mb: 1 }}
        >
            <Grid2>
                <Typography fontSize={39} fontWeight='light'>august 28th, 2024</Typography>
            </Grid2>

            <Grid2>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid2>

            <Grid2 container size={12}>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Add a title'
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='What happened today?'
                    minRows={5}
                />
            </Grid2>

            <ImageGallery />

        </Grid2>

    );
}