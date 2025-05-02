import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {add, remove, toggle} from './features/tasksSlice'
import {useRef} from 'react'

 
function App() {
  const {tasksList, lastIndex} = useSelector((state) => state.task);
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();


  return (
    <>
      <div className='container'>
        <h1>My Task Manager</h1>
        <input ref={inputRef} type="text" value={value} onChange={()=>setValue(inputRef.current.value)}/>
        <button className='addBtn' onClick={()=>{dispatch(add({id:lastIndex+1,description: inputRef.current.value, status: false})); setValue('')}}> Add task</button>
        <div>
        {tasksList.map((t, index) => {
          return(
            <div  className='item' key={index}>
              <div>
              <h4 style={{textDecoration: t.status ? 'line-through': 'none'}}>{t.description}</h4>
              </div>
              <div>
              <button className='toggleBtn'onClick={()=>dispatch(toggle({id:t.id}))}>{t.status? 'Mark as not completed': 'Mark as completed'}</button>
              <button className='removeBtn' onClick={() => dispatch(remove({id:t.id}))}>remove</button>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default App
