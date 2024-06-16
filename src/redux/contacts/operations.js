import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { setAuthHeader } from "../auth/operations";
axios.defaults.baseURL = "https://connections-api.goit.global/";

// GET  /contacts
axios.defaults.baseURL = "https://connections-api.goit.global/";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const token = state.auth.token;
//       console.log("Token in fetchContacts:", token); // Логирование токена
//       if (token) {
//         setAuthHeader(token);
//       }
//       const res = await axios.get("/contacts");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// POST  /contacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const token = state.auth.token;
//       if (token) {
//         setAuthHeader(token);
//       }
//       console.log("Adding contact:", { name, number }); // Логирование данных
//       const response = await axios.post("/contacts", { name, number }); // Изменено phone на number
//       console.log("Contact added:", response.data); // Логирование ответа
//       return response.data;
//     } catch (e) {
//       console.error("Error adding contact:", e.message); // Логирование ошибки
//       console.error("Error response data:", e.response.data); // Логирование данных ответа
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// DELETE /contacts/:id
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const token = state.auth.token;
//       if (token) {
//         setAuthHeader(token);
//       }
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// PATCH /contacts /{contactId}
// export const updateContact = createAsyncThunk(
//   "contacts/updateContact",
//   async ({ contactId, updatedData }, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const token = state.auth.token;
//       if (token) {
//         setAuthHeader(token);
//       }
//       const response = await axios.patch(`/contacts/${contactId}`, updatedData);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
