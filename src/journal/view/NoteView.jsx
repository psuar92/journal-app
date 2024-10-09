import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks/';
import { setActiveNote, startSaveNote } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();

    const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(activeNote);

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
      dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
      if( messageSaved.length > 0 ) {
        Swal.fire('Note updated', messageSaved, 'success');
      }

    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <Grid2 container 
            className='animate__animated animate__fadeIn animate__faster'
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ mb: 1 }}
        >
            <Grid2>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid2>

            <Grid2>
                <Button 
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='primary' 
                    sx={{ padding: 2 }}
                >
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
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='What happened today?'
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid2>

            <ImageGallery />

        </Grid2>

    );
}