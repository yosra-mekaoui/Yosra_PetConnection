import {combineReducers} from "redux";
import productSlice from "./slices/ProductSlice";
import usersSlice from "../features/Users";
const reducers =combineReducers({productSlice,usersSlice});

export default reducers;
