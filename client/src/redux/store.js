import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/userSlice';
import { financeReducer } from './finance/finanseSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token', 'user', 'isLoggedIn'],
};
const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    finance: financeReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ignoredActions,
    },
  }),
});

export const persistor = persistStore(store);
