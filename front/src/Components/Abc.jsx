import React, { useState } from "react";

const Abc = () => {
    const [likes, setcount] = useState(5)
    const [value, setValue] = useState("Текст из инпута")
    function inc(){
        setcount(likes + 1)
      }
    function dec(){
      setcount(likes - 1)
    }

  return (
    <div>
        <h1>{likes}</h1>
        <h1>{value}</h1>
        <input type="text" onChange={event => setValue(event.target.value)}/>
        <button onClick={inc}> + 1</button>
        <button onClick={dec}> - 1</button>
    </div>
  )
}

export default Abc;
