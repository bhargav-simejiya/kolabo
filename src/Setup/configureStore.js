import AsyncStorage from "@react-native-community/async-storage"
import {applyMiddleware, compose, createStore} from "redux"
import thunk from "redux-thunk"
import {persistStore} from "redux-persist"
import reducer from '../Redux/Reducers'

export default function configureStore(onCompletion) {
    const enhancer = compose(
        applyMiddleware(thunk),
    )
    const store = createStore(reducer, enhancer)
    persistStore(store, { storage: AsyncStorage }, onCompletion)
    
    return store
}