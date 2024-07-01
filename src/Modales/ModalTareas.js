// Se importa la librería de react
import React from "react";
// Se importa la libreria del dom
import ReactDOM from 'react-dom';

// Se importa los estilos del modal
import './ModalTareas.css';

// Se crea el componente modal
function ModalTareas(props){
    // Se ejecuta la herramienta o hook para crear portales y
    // se le asigna un contenido dentro, en este caso sería el
    // hijo que se le pasa como propiedad.
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>,
        document.getElementById('modalTareas')
    );
}

// Se exporta el componente modal
export {ModalTareas};