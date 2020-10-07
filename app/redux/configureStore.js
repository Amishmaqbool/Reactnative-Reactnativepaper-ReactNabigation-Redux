import { combineReducers } from "redux";
import EnterAmount from "./reducers/addAmountReducer";
const reducers = combineReducers({
  enterAmount: EnterAmount,
});
export default reducers;
