import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { meReducer } from "./Me/Me.reducer";
import { aboutReducer } from "./About/About.reducer";

const rootReducer = combineReducers({
    
    me: meReducer,
    about: aboutReducer,
    // ...
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;