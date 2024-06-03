import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
function App() {
  // const [todos, setTodos]=useState([])
  // useEffect(()=>{
  //   setInterval(()=>{
  //     fetch('https://sum-server.100xdevs.com/todos')
  //       .then(async function(res){
  //         const json= await res.json()
  //         setTodos(json.todos)
  //   })
  //   },10000)
  // },[])
  // return<div>
  //   {todos.map(todo=><Nav key={todo.id} title={todo.title} description= {todo.description}/>)}
  // </div>
  const [counter, setCounter]= useState(0)
  const[inputValue, setInputValue]= useState()

  function updateCounter(){
    setCounter(counter+1)
  }

  const count= useMemo(()=>{
    let finalCount=0;
    console.log("Memo called")
    for(let i=0;i<=inputValue;i++){
      finalCount=finalCount+i;
    }
    return finalCount
  },[inputValue])
  return<div>
    <button onClick={updateCounter}>Counter{counter}</button><br></br>
    <input onChange={function(e){
      setInputValue(e.target.value)
    }} placeholder='The sum from 1 to N' /><br/>
    Sum from 1 to {inputValue} is {count}
  </div>
}

export default App;
