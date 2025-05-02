import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter'

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
    </>
  )
}

export default App
