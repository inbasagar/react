import {createStore,Store, applyMiddleware,combineReducers} from 'redux'
//import { configureStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';
const composeEnhancers = composeWithDevTools({});
const rootReducer=combineReducers({
    carsReducer,
    alertsReducer

})
/*const store=createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
*/
const configureStore=()=>
{
    const store=createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(thunk)

        ));
    return store;
}
export default configureStore