import { createStore } from 'redux'
import  setStore  from "./todoReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const store = createStore(setStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store

// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, rootReducer)
 
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
//creo lo store
//uso redux dev tools perchè è molto comodo