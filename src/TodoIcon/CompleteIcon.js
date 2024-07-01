/* ESTE ES UN COMPONENTE PARA EL LLAMADO DEL SVG COMPLETADO */

// Se importa la librería de react
import React from 'react';
// Se importa el componente de los iconos
import { TodoIcon } from './';

// Componente para el check
function CompleteIcon(props){
    return (
        // Se llama al componente de los iconos y se le asignan 
        // propiedadeds, estos contienen validaciones para 
        // cambiar el color del svg o cualquier letra
        <TodoIcon 
            type="check"
            color={ props.completed ? 'greenyellow' : 'gray' }
            // Se le pasa la clase que se pondrá en los svg
            clases={props.clases}
            // Se le pasa la función de retorno que se ejecuta
            // al cumplir el evento correspondiente
            onClickEvent={props.onComplete}
        />
    );
}

// Se exporta el componente
export {CompleteIcon};
