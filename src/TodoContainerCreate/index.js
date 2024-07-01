/* ESTE ES UN COMPONENTE CONTENEDOR DEL FORM DE AGREGAR TAREAS */

// Se importa la librería de react
import React from 'react';

// Se importa el archivo de estilos
import './TodoContainerCreate.css';

//Se importa el contexto global
import {ReactContext} from '../Contexts/TodoContext'; 

// TodoContainerCreate es un componente que se encarga de crear el contenedor para 
// la sección de crear una nueva tarea
function TodoContainerCreate (){

    // Se llama al contexto global, es importante recalcar que debemos poner el cotexto
    // como padre sobre todos los que lo van a usar, ya que, si uno está fuera, este no lo
    // reconocerá
    const {agregaTodoFunc} = React.useContext(ReactContext);

    // Se crea el estado para lo descripcion
    const [descripState, setDescripState] = React.useState('');

    // Se crea el estado para el nombre
    const [nombreState, setNombreState] = React.useState('');
    
    // Estos son los elementos del componente
    return (
        // Se crea el contenedor con los elementos para la captura de una nueva tarea
        <div className='containerCreate'>
            <div className='frmCreate'>
                <h1 className='frmCreateTitulo'>Crear nueva tarea</h1>
                <label className='frmCreateSubTitulo'>Nombre de tarea:</label>
                <input className='frmCreateInput'
                    // Se asigna el valor del estado local 
                    // y se crea el evento de actualización del estado 
                    value={nombreState}
                    onChange={(event)=>{
                        setNombreState(event.target.value);
                    }}
                />
                <label className='frmCreateSubTitulo'>Descripción:</label>
                <textarea 
                    // Se asigna el valor del estado local 
                    // y se crea el evento de actualización del estado
                    value={descripState}
                    onChange={(event)=>{
                        setDescripState(event.target.value);
                    }}
                    placeholder='Escribe una descripción...'
                    className='frmCreateText'
                ></textarea>
                <button
                    // Se agrega el evento con la ejecución de la función para agregar
                    // las nuevas tareas 
                    onClick={()=>{
                        // Se llama a la función para agregar la tarea al estado del arreglo principal
                        agregaTodoFunc(nombreState,descripState);
                        // Se inicializan los campos para que queden vacíos
                        setNombreState('');
                        setDescripState('');
                    }} 
                    className='frmCreateButton'
                >Crear +</button>
            </div>
        </div>
    );
}

// Se exporta el compononente
export {TodoContainerCreate};