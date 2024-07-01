/* ESTE ES UN COMPONENTE CONTENEDOR DE LOS TITULOS DE LAS TAREAS */

// Se importa el archivo de estilos
import React from 'react';
import './TodoCounter.css';

// Se importa el context
import {ReactContext} from '../Contexts/TodoContext';

// Se crea el componente contenedor de los titulos.  Este recibe los parametros
// que le pasamos en el padre, esto al ser estados derivados, se actualizan y
// renderizan cuando haya cambios.
function TodoCounter(/*{total, completed}*/) {
    const {countCompletados,countTotales} = React.useContext(ReactContext);
    return (
         //   <h1 style={{ 
        //         backgroundColor:'green', 
        //         textAlign:'center', 
        //         fontSize:'35px',
        //         padding:'20px',
        //         margin:'10px'
        //     }} >
        //     Has completado {completed} de {total}
        //   </h1>
        // <ReactContext.Consumer>
        //     {({
        //         countCompletados,
        //         countTotales
        //     })=>(
                <>
                    {/* Se tiene el titulo */}
                    <h1 className="ContenedorTitulo" >
                        Tus tareas
                    </h1>
                    {/* Se tiene el subtitulo con los estados derivados */}
                    <h2 className='ContenedorSubtitulo'>
                        Haz completado {countCompletados} de {countTotales} tarea(s)
                    </h2>
                </>
        //     )}
        // </ReactContext.Consumer>
    );
  }

  export { TodoCounter };