
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        imageUrls: [],
        open: false, // drawer state
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        deleteNoteById: (state, action) => {
            state.activeNote = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
            state.messageSaved = `'${action.payload.title}' has been deleted`;
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                
                if( note.id === action.payload.id ) return action.payload;

                return note;
            });
            state.messageSaved = `'${action.payload.title}' has been successfully updated`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.activeNote = null;
        },
        toggleDrawer: (state) => {
            state.open = !state.open;
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    setPhotosToActiveNote,
    toggleDrawer,
    updateNote,
} = journalSlice.actions;