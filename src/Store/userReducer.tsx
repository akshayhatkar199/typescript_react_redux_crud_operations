import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import userList from "../components/Data";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  value: User[];
}

const initialState: UserState = { value: userList };

export type RootState = {
  userData: UserState;
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action: PayloadAction<{ id: number }>) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action: PayloadAction<User>) => {
      const { id, name, email } = action.payload;
      const userToUpdate = state.value.find((user) => user.id === id);
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
