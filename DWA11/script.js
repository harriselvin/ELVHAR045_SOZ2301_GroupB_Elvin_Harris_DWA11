// script.js

import {subscribe, getState, dispatch, State } from "./model/store.js";
import { CounterAdd, CounterSubtract, CounterReset } from "./model/action.js";

console.log(getState());

subscribe((_, next) => console.log(next))

dispatch(CounterAdd());
dispatch(CounterAdd());

dispatch(CounterSubtract());

dispatch(CounterReset());
