/*ESTE ES UN COMPONENTE UI EL CUAL CONTIENE TODA LA VISTA SIN LA LÓGICA */

// Las App UI son las que mayormente tienen la vista por ejemplo el html

// Se importan los archivos con componentes a utilizar
import { TodoCounter } from './TodoCountner';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
// Se importa el archivo de estilos
import './TodoContainerTasks/TodoContainerTasks.css';

// Se importa el formulario con los datos de las tareas
import { InfoTareasModal } from './Modales/InfoTareasModal';

// Se importa el componente del skeletor loading para el cargado de las tareas
import { LoadingListaTareas } from './LoadingSkeletons/LoadingListaTareas';

// Se importa la librería de react
import React from 'react';

// Se importa el modal para las tareas
import { ModalTareas } from './Modales/ModalTareas';

// Se importa el componente de context con los datos globales creado por react
import { ReactContext } from './Contexts/TodoContext';

// Se crea el componente para la vista y se le pasa los parémetros necesarios
function AppUI(/*{*/
    // countCompletados, /*Se le pasa esta variable de estado derivado para el total de las tareas completadas */
    // countTotales, /* Se le pasa esta variable de estado derivado para el total de las tareas */
    // searchVal, /*Se le pasa el estado del buscador de tareas*/
    // setSearchVal, /*Se le pasa el estado del buscador de tareas para cambios */
    // searchedTodo, /*Se le pasa el arreglo como estado derviado ya con los cambios hechos */
    // completeTodoFunc, /* Se le pasa la función para cambiar los datos en el arreglo para las tareas completadas */
    // elliminaTodoFunc, /* Se le pasa la función para eliminar el dato del arreglo con las tareas */
    // error, /*Se le pasa el estado de errores */
    // loading /*Se le pasa el estado de carga */
/*}*/){
    // Se immporta el estado del conexto para la apertura de la ventana modal
    const {openModal} = React.useContext(ReactContext);

    // Este es el elmento del componente
    return (
        <>
            <div className='containerTasks'>
                <div className='frmTasks'>
                    {/* Se llama al consumer para pasarle las propiedades, aqui solamente se le debe
                        pasar las propiedades que va a utilizar, es importante poner dentro lo que va a necesitar
                        los datos, igual es importante ponerlo entre parentesis para que se retorne sin poner return
                    */}
                    <ReactContext.Consumer>
                        {({
                            searchVal,
                            setSearchVal,
                            searchedTodo,
                            completeTodoFunc,
                            elliminaTodoFunc,
                            error,
                            loading
                        })=>(
                        //    Se crea un componente vacío ya que no se puede tener varios sin tener uno principal
                            <>  

                            {/* Se llama al context y se le pasa el componente para el titulo */}
                                {/* <ReactProvider> */}
                                {/* Se llama al componente */}
                                <TodoCounter />
                                {/* </ReactProvider> */}

                                {/* /* Se llama al commponente donde se tienen los titulos, a estos se le pasa
                                unas propiedades, las cuales podrán recibir y asignar al titulo. Estas propiedades
                                son las que tienen el conteo de completados y el total de las tareas  */}
                                {/* <TodoCounter completed={countCompletados} total={countTotales} /> */}
                                
                                {/* A este input se le asigna atributos
                                    La clase se debe llamar className
                                    Se le puede asignar eventos como el onchange, solo que este debe tener el camelcase,
                                    quedando de la siguiente manera: onChange.
                                */}
                                <input 
                                    className='frmTasksInput' 
                                    placeholder='Buscar tarea...'
                                    // Para que se pueda realizar cosas, se debe implementar una función arrow dentro del 
                                    // evento, esto para ejecutar, en este caso, se actualiza el estado de buscador.
                                    // De igual manera, para obtener la información del elemento html, se debe tomar el
                                    // evento que viene como propiedad, para luego tomar su target y ahi maniúlarlo.
                                    onChange={(event)=>{
                                        setSearchVal(event.target.value)
                                    }}
                                    value={searchVal}
                                />
                                {/* Se llama al componente listado. A este componente se le abre etiquetas para 
                                que se pueda ingresar hijos en el */}
                                <TodoList>
                                    {/* Se añade una validación para el cargado de datos */}
                                    {loading && 
                                        <>
                                            <LoadingListaTareas />  {/*Se añade el componente de carga de los listados */}
                                            <LoadingListaTareas />  {/*Se añade el componente de carga de los listados */}
                                            <LoadingListaTareas />  {/*Se añade el componente de carga de los listados */}
                                        </>
                                    }
                                    {/* {loading && <p>Estamos cargando la información...</p>} */}
                                    {/* De igual manera, se añade un componente con skeletons d e carga */}

                                    {/* Se añade una validación para los errores de datos */}
                                    {error && <p>Ocurrió un error al cargar los datos</p>}
                                    {/* Se añade una validación los arreglos vacíos */}
                                    {(!loading && searchedTodo.length === 0) && <p>!Crea tu primera tarea!</p>}


                                    {/* En este se hace un copiado del arreglo med iante mapeo (un duplicado), 
                                        al hacer el mapeo recorre el arreglo y con esto genera el componente de 
                                        los items, pero lo hace con la cantidad que tenga el arreglo y con los
                                        datos de este, algo así como si fuera un for.
                                    */}
                                    {searchedTodo.map(todo => (
                                    <TodoItem 
                                        // Se le crean propiedades que recibirá el componente de los items, de igual
                                        // manera, se le pasa los datos del arreglo.
                                        key={todo.id} 
                                        id={todo.id} 
                                        texto={todo.texto} 
                                        completed={todo.completed}
                                        // Se le pasa 2 propiedades como si fueran eventos, estas se ejecutan en el onclick
                                        // del hijo, esto es como si fueran funciones de retorno; a estos se le debe crear una 
                                        // función para luego internamente ejecutar la función que se encarga de realizar las
                                        // acciones.
                                        onComplete={()=>completeTodoFunc(todo.id)}
                                        onDeleted={()=>elliminaTodoFunc(todo.id)}
                                    />
                                    ))}
                                </TodoList>
                            </>
                        )}
                    </ReactContext.Consumer>
                </div>
            </div>
            {/* Se añade validación de renderizado para cuando la bandera de activar modal
                esté en activo, así mostrará el modal, de igual manera, se llama al componente
                modal para mostrarlo
            */}
            {openModal && (
                <ModalTareas>
                    <InfoTareasModal />
                </ModalTareas>
            )}
        </>
    );
};

export {AppUI};