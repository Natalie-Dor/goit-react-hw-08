import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice.js";
import authReducer from "./auth/slice.js";
import filtersReducer from "./filter/slice.js";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };
export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
