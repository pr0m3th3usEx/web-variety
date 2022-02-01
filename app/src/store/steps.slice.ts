import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepsState {
    currentStep: number
}

const initialState: StepsState = {
  currentStep: 1,
};

const stepsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const { setUser } = stepsSlice.actions;

export default stepsSlice.reducer;
