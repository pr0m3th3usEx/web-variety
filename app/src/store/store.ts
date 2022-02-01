import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from '../services/api';
import stepsReducer from './steps.slice';

const stepsPersistConfig = {
  key: 'steps',
  storage,
  blacklist: [],
};

const reducers = combineReducers({
  user: persistReducer(stepsPersistConfig, stepsReducer),
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['steps'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
