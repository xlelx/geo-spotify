import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const initialState = {
    token: '',
    dataLoaded: false,
    refreshToken: '',
    authenticated: false,
    playlists: []
}

const middleware = [thunk];
const reducers = {
    root: rootReducer
}
const store = createStore(
    combineReducers(reducers),
    initialState,
    compose(applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)

export default store