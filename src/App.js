/* ESTE ES UN COMPONENTE PRINCIPAL DE LA APP */
// import logo from './platzi.webp';
// import React from 'react';
// import './App.css';
// import { TodoCounter } from './TodoCounter';
// import { TodoSearch } from './TodoSearch';
// import { TodoList } from './TodoList';
// import { TodoItem } from './TodoItem';
// import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   {id: '1', texto: 'Recordatorio de información', completed: true},
//   {id: '2', texto: 'Estudiar Inglés', completed: true},
//   {id: '3', texto: 'Estundiar.Net', completed: false},
//   {id: '4', texto: 'Terminar React', completed: true}
// ];
import { TodoContainerCreate } from './TodoContainerCreate';
import { TodoContainerTasks } from './TodoContainerTasks';

// Se importa el componente de context que creamos
import { ReactProvider } from './Contexts/TodoContext';

function App() {
  return (
    // <React.Fragment>
    // <>
      <div style={{backgroundColor:'#FE2E64', display:'table',width:'100%', height:'100vh'}}>
        {/* Se llama a los componentes contenedores */}
        <ReactProvider>
          <TodoContainerCreate />
          <TodoContainerTasks />
        </ReactProvider>
        
        {/* <TodoContainerCreate />
        <TodoContainerTasks /> */}
        
        {/* <TodoCounter completed={2} total={1233} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              texto={todo.texto} 
              completed={todo.completed}
            />
          ))}
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </TodoList>
        <CreateTodoButton /> */}
      </div>
    // </> 
    // </React.Fragment>
  );
}

export default App;
