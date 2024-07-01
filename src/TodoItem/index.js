/* ESTE ES UN COMPONENTE PARA EL CONTENEDOR DE LOS DATOS DE LAS TAREAS */

// Se importa la librería de react
import React from 'react';

// Se importa el estilo
import './TodoItem.css';
// Se importan los componentes de los botones de las tareas
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

// Se importa el contexto global
import {ReactContext} from '../Contexts/TodoContext';

// Se crea el componente para el contenedor de cada una de las tareas
// Este se reutilia así que solo se ejecuta una vez
function TodoItem(props) {
  // Se inicia el contexto para la bandera de open modal
    const {setOpenModal, saveTareaModal} = React.useContext(ReactContext);

    return (
      <li className='liTasks'>
        {/* <span className='checkTasks checkTasksuncompleted'>+</span> */}
        {/* <span className={`checkTasks ${props.completed && "checkTasksCompleted"}`}>+</span> */}
        
        {/* <span 
          className={`checkTasks ${props.completed ? "checkTasksCompleted" : "checkTasksuncompleted"}`}
          onClick={props.onComplete}
        >+</span> */}
        
        {/* Se llama al componente del check de revisado de las tareas+
            A este componente se le pasan unos parametros, uno de estos es
            el valor de si está completado o no, de igual manera se le pasa 
            las clases.    
        */}
        <CompleteIcon 
          // clases={`checkTasks ${props.completed ? "checkTasksCompleted" : "checkTasksuncompleted"}`}
          clases='checkTasks'
          // Se le pasa la función de retorno la cual se ejecutará
          // cuando se cumpla el evento correspondiente
          onComplete={props.onComplete}
          completed={props.completed}
        />

          {/* Se agrega la descripción con las propiedades de los datos y los estilos mediante validación 
            Se agrega un onclick para cambiar el estado de la ventana modal, es importante que cuando se
            integre el onclick, se creee una función para luego dentro de esta agregar lo que realizará el cambio
          */}
          <p className={`descTasks ${props.completed ? "textCompletado" : "textinCompletado"}`} 
              onClick={(event)=>{
                // Aqui se valida para que retorne uno diferente
                // setOpenModal(openModal ? false : true);

                // Pero existe otra manera, cuando se pone el signo !
                // se le indica que cambie lo contrario del booleano
                // valida, si el valor es falso, devuelve true, si no, devuelve falso
                // asi nos ahorramos varias lineas de código
                setOpenModal(state=> !state);
                // Se pasa el key para que encuentre los datos de este
                saveTareaModal(props.id,{});
              }}
          >{props.texto}</p>

        {
        /* <span className='eliTasks' onClick={props.onDeleted}>x</span> */}

        {/* Se llama al componente de elimimnar una tarea tareas
            A este componente se le pasan unos parametros,se le pasa 
            las clases.  
        */}
        <DeleteIcon 
          clases='eliTasks'
          // Se le pasa la función de retorno la cual se ejecutará
          // cuando se cumpla el evento correspondiente
          onDeleted={props.onDeleted}
        />
      </li>
    );
  }

  // Se exporta el componente
  export { TodoItem }

  // const defaultTodos = [
  //   {id: '1', texto: 'Recordatorio de información',descripcion:'Prueba de descripcion', completed: false},
  //   {id: '2', texto: 'Estudiar Inglés',descripcion:'Prueba de descripcion', completed: true},
  //   {id: '3', texto: 'Estundiar.Net',descripcion:'Prueba de descripcion', completed: false},
  //   {id: '4', texto: 'Terminar React',descripcion:'Prueba de descripcion', completed: true}
  // ];
  // const stringi = JSON.stringify(defaultTodos)
  // localStorage.setItem('todosDatosV1',stringi)