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
export const showUser = createAsyncThunk(
  "showUser",
  async (rejectwithValue) => {
    const response = await fetch(
      "https://66ac80c5f009b9d5c7324b1c.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectwithValue(error);
    }
  }
);

//Delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {    const response = await fetch(
      `https://66ac80c5f009b9d5c7324b1c.mockapi.io/crud/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update action

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://66ac80c5f009b9d5c7324b1c.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
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
      return rejectWithValue(error);
    }
  }
);



const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((ele) => ele.id !== action.payload.id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userDetailSlice.reducer;
