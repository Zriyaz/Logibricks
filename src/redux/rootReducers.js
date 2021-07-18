import {combineReducers} from "redux"
import { colorReducer } from "./reducers";

const rootReducer = combineReducers({
  color: colorReducer
});

export default rootReducer;
