import React from 'react';
import { useState } from 'react';

// Corrigir nome do componente e destructuring
const TodoForm = ({ addTodo }) => { // <-- Mudança aqui
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category); // Agora funciona corretamente
        setValue("");
        setCategory("");
    };

    return (
        <div className='todo-Form'>   
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Digite o título' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default TodoForm; // <-- Nome corrigido