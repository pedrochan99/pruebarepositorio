/* ESTE ES UN COMPONENTE PARA EL CONTENEDOR DE TAREAS  ESTE CONTIENE LA LÓGICA*/

// Se importa el componenente que contiene la vista
import { AppUI } from '../AppUI';
// Se importa react library
// import React from 'react';
// Se importa el componente de context que creamos
// import { ReactProvider } from '../Contexts/TodoContext';

// Se importa el hook de localStorage
// import { useLocalStorage } from '../Hooks/useLocalStorage';

// Se crea un arreglo base con las tareas escritas en código duro
// id=>identificador, texto=>descripcion de la tarea, completed=>Si se completó
// const defaultTodos = [
//   {id: '1', texto: 'Recordatorio de información', completed: false},
//   {id: '2', texto: 'Estudiar Inglés', completed: true},
//   {id: '3', texto: 'Estundiar.Net', completed: false},
//   {id: '4', texto: 'Terminar React', completed: true}
// ];

// localStorage.setItem('todosDatosV1', defaultTodos);

//TodoContainerTask es el componente del contenedor donde se encuentran las tareas
function TodoContainerTasks (){
    
    // Este es el elmento del componente UI
    // return(<AppUI 
    //     // countCompletados={countCompletados}
    //     // countTotales={countTotales}
    //     // searchVal={searchVal}
    //     // setSearchVal={setSearchVal}
    //     // searchedTodo={searchedTodo}
    //     // completeTodoFunc={completeTodoFunc}
    //     // elliminaTodoFunc={elliminaTodoFunc}
    //     // error={error}
    //     // loading={loading}
    // />);

    // Se llama al context creado
    // Se pasa el componente appui como hijo así heredará los valores que se le pasó
    // en el provider
    return(
        // <ReactProvider>
            <AppUI />
        // </ReactProvider>
    );
}

// Se exporta el componente
export {TodoContainerTasks};