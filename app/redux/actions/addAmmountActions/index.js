import * as ACTION_TYPE from "../actionTypes";

export const amountAdded = (amount) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.AMOUNT_ADDED,
      payload: amount,
    });
  };
};
export const setVisiable = () => {
    return async (dispatch) => {
      dispatch({
        type: ACTION_TYPE.SETMODAL_VISIABLE,
        
      });
    };
  };