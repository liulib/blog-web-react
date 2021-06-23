import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { login1, LoginReq } from '@/apis/demo';

interface CommonState {
    signInModalVisible: boolean;
}

const initialState: CommonState = {
    signInModalVisible: false
};

export const testAsyncThunk = createAsyncThunk(
    'common/testAsyncThunk',
    async (data: LoginReq, thunkApi) => {
        return await login1(data);
    }
);

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        changeSignInModalVisible: (state, action: PayloadAction<boolean>) => {
            state.signInModalVisible = action.payload;
        }
    },
    extraReducers: {
        [testAsyncThunk.pending.type]: state => {
            state.signInModalVisible = false;
        },
        [testAsyncThunk.fulfilled.type]: state => {
            state.signInModalVisible = true;
        },
        [testAsyncThunk.rejected.type]: state => {
            state.signInModalVisible = false;
        }
    }
});
