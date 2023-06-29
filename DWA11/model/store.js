// @ts-check

// store.js

import { reducer } from "./reducer.js";

/**
 * @typedef {object} State
 * @prop {number} count
 */

export const State = {};

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
const states = [
  {
    count: 0,
    },
];

/**
 * @return {State}
 */
export const getState = () => {
  return Object.freeze({ ...states[0] });
};

export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);
  subscribers.forEach((item) => item(prev, next));
  states.unshift(next);
};

/**
 * @param {Subscription} subscription
 * @return {EmptyFn}
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription);
  const handler = (item) => item !== subscription;

  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler);
    subscribers = newSubscribers;
  };

  return unsubscribe;
};
