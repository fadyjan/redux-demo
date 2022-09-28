import { createStore } from "redux";

const counterReducer = (state = { counter: 0, ShowContent: false }, action) => {
  if (action.type === "increment") {
    return {
      ShowContent: state.ShowContent,

      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ShowContent: state.ShowContent,

      counter: state.counter + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      ShowContent: state.ShowContent,

      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ShowContent: !state.ShowContent,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
