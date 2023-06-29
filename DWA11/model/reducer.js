// @ts-check

// reducer.js

import { State } from "./store.js";

/**
 * @param {State} state
 * @param {*} action
 * @return {State}
 */
export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
       count: state.count + 1
      };
    }

    case "SUBTRACT": {
      return {
        ...state,
        count: state.count - 1
      };
    }

    case "RESET": {
      return {
        ...state,
        count: 0,
      };
    }

    default:
      return state;
  }
};
