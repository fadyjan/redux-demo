import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

    //Return Specific values from store
  const counter = useSelector((state) => state.counter);
  const ShowContent = useSelector((state) => state.ShowContent);


  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase" , amount : 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({type : "toggle"})
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {ShowContent && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increase by 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
