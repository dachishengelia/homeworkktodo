import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const toggleDarkMode = () => {
    setDark(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#333' : '#fff';
    document.body.style.color = dark ? '#fff' : '#000';
  }, [dark]);

  return (
    <div>
      <h1>To-Do</h1>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="daamatet taski"
      />
      <button onClick={addTodo}>daawiret ro daamatot</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={toggleDarkMode}>
        daawiret aq!
      </button>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default App;