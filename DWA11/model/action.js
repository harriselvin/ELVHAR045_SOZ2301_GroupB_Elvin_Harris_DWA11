// @ts-check

// action.js

/**
 * Adds 1 count to the store 
 *
 * @returns {object}
 */
export const CounterAdd = () => {
  return { 
    type: "ADD"
  }
};

/**
 * Removes 1 count from the store
 *
 * @returns {object}
 */
 export const CounterSubtract = () => {
   return {
     type: "SUBTRACT"
   }
 };
 

/**
 * Resets the counter
 * 
 * @returns {object}
 */
export const CounterReset = () => {
  return {
    type: "RESET"
  }
}
