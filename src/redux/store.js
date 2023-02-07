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
import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { authSlices } from './Auth/AuthSlice';
import  {userReducer} from './User/usersSlice';
import { petsReducer } from './Pets/petsSlice';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authSlices);

const rootReducer = combineReducers({
    auth: persistedReducer,
    user: userReducer,
    pets: petsReducer,
});

const store = configureStore({

    reducer: rootReducer,

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
const persistor = persistStore(store);

export { store, persistor };
