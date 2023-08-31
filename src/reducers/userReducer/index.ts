import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedUser: {
        authToken: '',
        nomeBar: '',
        url: '',
        userLogin: '',
        userPass: '',
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedUser = action.payload;
        },
        cleanUser: (state) => {
            state = initialState;
        },
    },
});

export const { login, cleanUser } = userSlice.actions;

export default userSlice.reducer;
