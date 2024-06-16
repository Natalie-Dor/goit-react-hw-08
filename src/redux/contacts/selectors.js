import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

export const selectNameFilter = state => state.filters.name;
// export const selectContactsFilter = state => state.filters?.name ?? "";

// export const selectFilteredContacts = createSelector(
//   [selectAllContacts, selectContactsFilter],
//   (contacts, filter) => {
//     if (!filter) return contacts;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
