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
import { authReducer } from './Auth/AuthSlice';
import { userReducer } from './User/userSlice';
import { petsReducer } from './Pets/petsSlice';
import { noticesReducer } from './Notices/noticesSlice';
const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedReducer,
    user: userReducer,
    pets: petsReducer,
    notices: noticesReducer,
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
