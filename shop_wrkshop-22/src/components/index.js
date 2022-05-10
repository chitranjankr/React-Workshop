import { combineReducers } from "redux";
import { postsReducer } from "./posts";
import {CartitemsReducer} from "./CartItems";


const allReducers = combineReducers({postsReducer});

export default allReducers;