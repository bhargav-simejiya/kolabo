import React from 'react'
import {Provider} from "react-redux"
import AppNavigator from './AppNavigator';
import configureStore from "./configureStore";
const App = () => {
    let store = configureStore(true);
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}
export default App;
