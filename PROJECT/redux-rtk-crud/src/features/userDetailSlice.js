import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, rejectwithValue) => {
    const response = await fetch(
      "https://66ac80c5f009b9d5c7324b1c.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectwithValue(error);
    }
  }
);

//read action
export const showUser = createAsyncThunk("showUser", async (rejectwithValue) => {
  const response = await fetch(
    "https://66ac80c5f009b9d5c7324b1c.mockapi.io/crud"
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectwithValue(error);
  }
});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,

    extraReducers: {
      [createUser.pending]: (state) => {
        state.loading = true;
      },
      [createUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      },
      [createUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
      [showUser.pending]: (state) => {
        state.loading = true;
      },
      [showUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.users=action.payload;
      },
      [showUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export default userDetail.reducer;
