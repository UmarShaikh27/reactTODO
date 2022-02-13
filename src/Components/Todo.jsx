import React , {useState} from 'react'
import "./style.css"

function Todo() {

    const [todo,setTodo] = useState([])
    const [inp,inpvalue] = useState()
    const [myIndex,setMyIndex] = useState()
    const [editInputValue,setEditInputValue] = useState()

    

    const addFunc = () => {
       
        todo.push(inp)
        setTodo([...todo])
    }


    const removeFunc = () => {
        setTodo([])
    }

    const editTodo = (ind) => {
  
      setMyIndex(ind)
    }

    const deleteTodo = (ind) => {
      console.log(ind);
      todo.splice(ind,1)
      setTodo([...todo])
    }

    const updateValue = () => {
      console.log("oyi");
      todo.splice(myIndex, 1, editInputValue);
      setTodo([...todo]);
      setMyIndex("");
      setEditInputValue("");
    }


  return (
    <div className='container box'>
     <h1 >Enter Todo</h1>
      <input
       type="text"
       className='input-group form-control'
       onChange={(e) => {inpvalue(e.target.value)}}
        />
      <div className="btnDiv">
      <button className='btn btn-primary  mx-3 my-3' onClick={addFunc}>Add Todo</button>
        <button className='btn btn-danger mx-3 my-3' onClick={removeFunc}>Remove Todo</button>
      </div>

        <div className='my-4'>
        {todo.map((value, index, array) => {
          return index === myIndex ? (
            <div className='d-flex'>
              <input
                key={index}
                placeholder="Edit value"
                value={editInputValue}
                className="input-group-sm form-control"
                onChange={(e) => setEditInputValue(e.target.value)}
              />
              <button className="btn btn-info" onClick={updateValue}>
                update
              </button>
          
            </div>
           
          ):(
            <div className='contentArea my-1'>
                <li className='theList' key={index}> {value} </li>
                <div>
                   <button className="btn btn-sm btn-success mx-2" onClick={() => editTodo(index)}>Edit</button>
                   <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
                </div>
                
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default Todo
