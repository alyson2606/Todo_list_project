import React from 'react';

// Corrigir nome do componente para PascalCase
const Todo = ({ todo, RemoveTodo }) => { // <-- Nome do componente corrigido
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className='complete'>Completar</button>
        <button className='remove' onClick={() => RemoveTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};

export default Todo; // <-- Nome corrigido