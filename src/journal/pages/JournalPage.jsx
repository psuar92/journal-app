import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../view';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';
import { useMemo } from 'react';

export const JournalPage = () => {

    const { isSaving, activeNote } = useSelector(state => state.journal);

    const dispatch = useDispatch();

    const checkSaving = useMemo(() => isSaving === true, [isSaving]);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>

            {
                (!!activeNote)
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            <IconButton
                disabled={checkSaving}
                onClick={onClickNewNote}
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    ':disabled': { backgroundColor: 'grey' },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    );
}