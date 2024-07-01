/* ESTE ARCHIVO ES UN COMPONENTE DE CARGA PARA LOS LISTADOS DE TAREA */

// Se importa react libreria
import React from 'react';
// Se importa el css
import './LoadingListaTareas.css';

// Se importan los svg del check y eleminar
import { CompleteIcon } from '../../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../../TodoIcon/DeleteIcon';

// Se crea el componente de carga
function LoadingListaTareas(){
    return(
        // Se crea el contenedor
        <div className='contentLoad'>
            {/* Se llama al componente check */}
            <CompleteIcon 
                clases='completeLoad'
                completed={false}
            />

            <p className='descripLoad'></p>

            {/* Se llama al componente elimiar */}
            <DeleteIcon 
                clases='elimLoad'
            />
        </div>
    );
}

// Se exporta el componente
export {LoadingListaTareas};