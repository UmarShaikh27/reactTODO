import React , {useState} from 'react'
import "./style.css"

function Todo() {

    const [todo,setTodo] = useState([])
    const [inp,inpvalue] = useState()

    

    const addFunc = () => {
       
        todo.push(inp)
        setTodo([...todo])
    
       
     
    
        // {console.log(inp.length);}
    }
    const removeFunc = () => {
        setTodo([])
    }

  return (
    <div className='container'>
      Hello world
      <input
       type="text"
       className='input-group'
       onChange={(e) => {inpvalue(e.target.value)}}
        />
        <button className='btn btn-primary' onClick={addFunc}>Add Todo</button>
        <button className='btn btn-danger' onClick={removeFunc}>Remove Todo</button>

        <div>
        {todo.map((value, index, array) => {
          return <li className='theList' key={index}> {value} </li>;
        })}
        </div>
    </div>
  )
}

export default Todo
