import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer);
export const persistor = persistStore(store);