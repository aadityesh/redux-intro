import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/store'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()
  /*
  const handleCounterIncrement = () => dispatch({ type: 'increment' })
  const handleCounterDecrement = () => dispatch({ type: 'decrement' })
  const handleIncrementByPayload = () => dispatch({ type: 'increaseByValue', payload: 5 })
  const toggleVisiblity = () => dispatch({ type: 'hideCounter' })
  const handleReset = () => dispatch({ type: 'reset' })
  */

  const handleCounterIncrement = () => dispatch(counterActions.increment())
  const handleCounterDecrement = () => dispatch(counterActions.decrement())
  const handleIncrementByPayload = () => dispatch(counterActions.increaseByValue(13))
  const toggleVisiblity = () => dispatch(counterActions.hideCounter())
  const handleReset = () => dispatch(counterActions.reset())

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.toggleBtn}>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleCounterIncrement}>+</button>
        <button onClick={handleCounterDecrement}>-</button>
        <button onClick={handleIncrementByPayload}>+ payload</button>
        <button onClick={toggleVisiblity}>toggleVisiblity</button>
      </div>
    </main>
  );
};

export default Counter;
