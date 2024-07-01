// Se importa la libreria de react
import React from "react";

// Se importa el contexto
import { ReactContext } from "../../Contexts/TodoContext";

// Se importan los estilos
import './InfoTareasModal.css';

// Se crea el componente con el form de información
function InfoTareasModal(){
    // Se llama al contexto global
    const {setOpenModal, tareaModal, saveTareaModal} = React.useContext(ReactContext);
    // Se crea un estado derivado del estado que contiene el arreglo del key y
    // asi poder asignarlo en la ventana 
    const objTarea = tareaModal[0]; 
    return(
        <div className="contentInfoTarea">
            {/* Se asigna el titulo de la tarea mediante el estado del contexto */}
            <div className="dituloInfoTarea">{objTarea.texto}</div>
            {/* Se asigna la descripción de la tarea mediante el estado del contexto */}
            <div className="descripInfoTarea">{objTarea.descripcion}</div>
            <div className="buttonInfoTarea">
                <button 
                    // Se ejecuta el guardado de la variable openModal
                    // Importante ponerlo siempre dentro de una función
                    onClick={()=>{
                        setOpenModal(state=>!state);
                        // Se borra el arreglo del key para que quede vacío
                        saveTareaModal(0,{});
                    }}
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}

// Se exporta el componente
export {InfoTareasModal};