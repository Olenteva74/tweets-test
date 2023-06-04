import { configureStore } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from "./filterSlice";
import { userReducer } from "./userSlice";

const persistConfig = {
    key: 'users',
    storage,
    whitelist: ["users", "showLoadButton", "page"]
  };

 export const store = configureStore({
    reducer: {
        filter: filterReducer,
        users: persistReducer(persistConfig, userReducer)
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
 });
 
 export const persistor = persistStore(store);