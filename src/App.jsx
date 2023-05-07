import { useState } from "react";
import "./style.css";
import { TodoList } from "./TodoList";
import {NewTForm} from "./NewTForm";
export default function App() {
  const [todos, setTodos] = useState([]);

 function addTodo(title){
  setTodos((currentTodos) => {
    return[
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ];
  });
 }
   
   
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
    <NewTForm addTodo={addTodo}/>
      <h1 className="header">Todo List</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  );
}
