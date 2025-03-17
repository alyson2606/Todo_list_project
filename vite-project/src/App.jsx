import { useState } from "react";
import "./App.css"
import Todo from "./components/todo"
import TodoForm from "./components/todoForm";
import todo from "./components/todo";
export default function App(){
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  const addTodo = (text, category) => {
    const newTodo = [ // Remova a array interna extra
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }
    ];
    setTodos(newTodo);
  };
  const RemoveTodo = (id) => {
  // Corrigir o spread operator para arrays
  const newTodos = todos.filter((todo) => todo.id !== id); // Filtra corretamente
  setTodos(newTodos);
};
  return(
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} RemoveTodo={RemoveTodo}/>
        
        ))}
      </div>
      <TodoForm addTodo ={addTodo}/>
    </div>
  )
}