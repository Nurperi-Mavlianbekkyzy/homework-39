import React from 'react';
import './App.css'; 
import { store } from "./store/index";
import Counter from './counter/index'
import { useDispatch, useSelector } from 'react-redux';

const App=()=> {
  useSelector (state => state)
  const dispatch=useDispatch()
 const onIncrement = () => {
    console.log("INCREMENT");
    dispatch({ type: 'INCREMENT' })
  }

  const onDecrement = () => {
    console.log("DECREMENT");
    dispatch({ type: "DECREMENT" }) //usedispatch
  }
    return (
      <Counter value={store.getState()} //useselector
      onIncrement={onIncrement}
      onDecrement={onDecrement} />
    );
}
export default App; //don't need