import React, { useEffect, useState } from "react";

const AjaxCallComponent = () => {
  const [ todo, setTodo ] = useState({
    id: 0,
    title: "initial",
    userId: 0,
    completed: false,
  });

  useEffect(()=> {
    
    const reqXhr = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();
      setTodo(result) 
    }

    reqXhr();

  }, []);
  
  return (
    <div>
      <h3>{todo.title}</h3>
    </div>
  );

};

export default AjaxCallComponent;
