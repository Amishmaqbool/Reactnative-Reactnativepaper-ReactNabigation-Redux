import * as ACTION_TYPES from "../../actions/actionTypes";

const initialState = {
  amount: 0,
  visiable: false,
};

const EnterAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AMOUNT_ADDED:
      return {
        ...state,
        amount: action.payload,
        visiable: true
      };
      case ACTION_TYPES.SETMODAL_VISIABLE:
      return {
        ...state,
         visiable: false
      };
    default:
      return state;
  }
};

export default EnterAmountReducer;
