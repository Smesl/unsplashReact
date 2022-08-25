import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { reducer } from './reducer';
import { statusReducer } from './statusReducer';


const rootReducer = combineReducers({
    photos: reducer,
    status: statusReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))