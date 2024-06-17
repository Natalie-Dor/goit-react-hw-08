import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeader } from "../auth/operations";
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

// PATCH /contacts /{contactId}
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token) {
        setAuthHeader(token);
      }
      const response = await axios.patch(`/contacts/${contactId}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
