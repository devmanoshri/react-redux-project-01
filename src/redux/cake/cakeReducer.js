import { BUY_CAKE } from "./cakeTypes";

// 1. define initial state
const initialState = {
  numOfCakes: 10,
};

// 2. create reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// 3. export reducer
export default cakeReducer;
