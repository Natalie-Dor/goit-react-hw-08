import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectAllContacts } from "../auth/selectors";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectContactsFilter = state => state.filters?.name ?? "";

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectContactsFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
