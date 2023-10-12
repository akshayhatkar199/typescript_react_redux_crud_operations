import React,{useReducer} from 'react';
import './App.css';

 export default function App() {
  interface State {
    count: number 
 };
 
 type CounterAction =
   | { type: "reset" }
   | { type: "setlessCount"; value: State["count"] }
   | { type: "setCount"; value: State["count"] }
   
 
 const initialState: State = { count: 0 };
 
 function stateReducer(state: State, action: CounterAction): State {
   switch (action.type) {
     case "reset":
       return initialState;
     case "setCount":
       return { ...state, count: action.value };
     case "setlessCount":
       return { ...state, count: action.value };
     default:
       throw new Error("Unknown action");
   }
 }
   const [state, dispatch] = useReducer(stateReducer, initialState);
 
   const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
   const lessFive = () => dispatch({ type: "setlessCount", value: state.count - 5 });
   const reset = () => dispatch({ type: "reset" });
  return (
    <div className="App">
      <h2> TypeScript</h2>
        <p>Count: {state.count}</p>
        <button onClick={addFive}>Add 5</button>
        <button onClick={lessFive}>Less 5</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}