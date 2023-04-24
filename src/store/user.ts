import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface User {
  username: string;
  phone: string;
  website: string;
}

const initialState: User = {
  username: "Aris",
  phone: "00000",
  website: "link",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    updateWebsite: (state, action: PayloadAction<string>) => {
      state.website = action.payload;
    },
  },
});

export const { updateUsername, updatePhone, updateWebsite } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
