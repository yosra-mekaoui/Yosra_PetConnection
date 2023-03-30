import {combineReducers} from "redux";
import productSlice from "./slices/ProductSlice";
import usersSlice from "../store";
const reducers =combineReducers({productSlice,usersSlice});

export default reducers;
