import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../../store';

interface TypeConfig {
    config: TypeMessage;
}

interface TypeMessage {
    type: string;
    message: string;
    show: boolean;
}

const initialState: TypeConfig = {
    config: {
        type: '',
        message: '',
        show: false,
    },
};

export const messageBoxSlice = createSlice({
    name: 'messageBox',
    initialState,
    reducers: {
        showMessage: (state, action: PayloadAction<TypeMessage>) => {
            state.config = {...action.payload};
        },
        hideMessage: state => {
            const newState = {
                type: '',
                message: '',
                show: false,
            };

            state.config = newState;
        },
    },
});

export const {showMessage, hideMessage} = messageBoxSlice.actions;

export const selectMessageBox = (state: RootState) => state.messageBox;

export default messageBoxSlice.reducer;
