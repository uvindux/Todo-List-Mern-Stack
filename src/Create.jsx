import React, { useState } from 'react'
import axios from 'axios';

function Create() {
          const [task,setTask]=useState();
          const handleAdd=()=>{
                    axios.post("http://localhost:4000/add",{task:task})
                    .then(result => console.log(result))
                    .catch(err => console.log(err))
                    



          }
  return (
    <div className='create_form '  >
          <input type="text" name="" id="" className=' input' onChange={(e)=> setTask(e.target.value)} />

          <button type="button" className=' button' onClick={handleAdd} >Add</button>
    </div>
  )
}

export default Create