import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/get")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleedite = (id) => {
    axios.put("http://localhost:4000/update/" + id)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  const handleDelete =(id)=>{
    axios.delete("http://localhost:4000/delete/" + id)
      .then(result => console.log(result))
      .catch(err => console.log(err));

  }

  return (
    <div className='home'>
      <h1>TodoList</h1>
      <Create />
      {
        todos.length === 0 
          ? (
            <div><h2>No Record</h2></div>
          ) : (
            todos.map((todo, index) => (
              <div className="task" key={index}>
                <div className='checkbox' onClick={() => handleedite(todo._id)}>
                  {todo.done ? (
                    <BsFillCheckCircleFill className="icon" />
                  ) : (
                    <BsCircleFill className="icon" />
                  )}
                  <p className={todo.done ? "line_through" : ""} >{todo.task}</p>
                </div>
                <span><BsFillTrashFill className="icon" onClick={()=> handleDelete(todo._id)}/></span>
              </div>
            ))
          )
      }
    </div>
  );
}

export default Home;
