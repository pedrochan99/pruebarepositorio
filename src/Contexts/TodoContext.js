// Se importa react library
import React from 'react';

// Se importa el hook de localStorage
import { useLocalStorage } from '../Hooks/useLocalStorage';

const ReactContext = React.createContext();

function ReactProvider({children}){
    // Se crea la variable para la validación de la ventana modal
    const [openModal, setOpenModal] = React.useState(false);

    // Se toma los datos de un localStorage que se guarda al momento de crear
    // una tarea nueva
    // let parsedTodosKocal = localStorage.getItem('todosDatosV1');
    
    // Se añade validación por si no  existe el localStorage
    // let parsedTodos = parsedTodosKocal ? JSON.parse(parsedTodosKocal) : [];
    
    // Esta seccion crea un estado, en este se puede guardar información y cada vez 
    // que lo realice, se renderizará los lugares donde este esté asignado.
    // Para recibir el valor es necesario 2 parametros, el primero es el que se encarga
    // de  recibir los datos y renderizar y el otro es para actualizar el estado.
    // Se crea un estado para los datos al buscar.
    const [searchVal, setSearchVal] = React.useState('');
    
    // let [completedVal, setCompletedVal] = React.useState(0);
    // let [totalVal, setTotalVal] = React.useState(0);
    // const [todos, setTodos] = React.useState([]);
    // Se crea un estado para el arreglo con las tareas
    // const [todos, setTodos] = React.useState(/*defaultTodos*/parsedTodos);

    // Se remplaza la creación del estado del arreglo, ahora se inicializa
    // el hook el cual se encargará de modificar el locaStorage
    const {item: todos, saveItem: setTodos, error, loading} = useLocalStorage('todosDatosV1',[]);
    // const [todos, setTodos] = useLocalStorage('todosDatosV1',[]);
    // Como se recibe más de 2 parámetros, se cambia a objeto
    // Es importante renombrar los nombres al recibir, ya que, como se
    // vuelve un objeto, pues este toma el nombre para identificar el dato correspondiente
    // En caso de que no se quiera cambiar el nombre, simplemente se renombra poniendo : y el nombre

    // Se añade el guardado de los arreglos modifcados
    // Esto es porque al asignarle el estado de todos
    // lo convierte en un estado derivado y cuando este
    // se mofidifica, renderiza todo donde se ha llamado
    // const setLocalTodos = JSON.stringify(todos);
    // localStorage.setItem('todosDatosV1',setLocalTodos);
    //De igual manera se puede crear una función para actualizar
    // el localStorage y el estado. 


     // Se crea el estado para el arreglo de la tarea seleccionada.
     const [tareaModal,setTareaModal] = React.useState({});
     // Se crea la función para actualiar el estado y guardar el arreglo
     // Este obtiene las propiedades de key y default
     const saveTareaModal = (key, defaultIni) =>{
        if(parseInt(key) > 0){
            // Se crea un filtro del arreglo principal, devolviendo solo el que encuentra con la key
            const searchTarea = todos.filter(
                (todo)=>{
                    return String(todo.id) === String(key);
                }
            ); 
            // Se modifica el estado del arreglo que solo contiene el valor que trajo el key
            setTareaModal(searchTarea.length > 0 ? searchTarea : defaultIni);
        }else{
            // Se guarda en el ini
             setTareaModal(defaultIni);
        }
     } 


    // Se realiza el conteo de las tareas realizadas
    // Estos son estados derivados, a que se refiere con esto.
    // Esto significa que son variables que se crean pero al asignarle
    // un estado, este obtiene su funcionalidad de renderización, pero
    // la diferencia de estos, es que no se inicializan como estados
    const countCompletados = todos.filter(todo=>!!todo.completed).length;
    
    // Se realiza el conteo del total de las tareas agregadass
    const countTotales = todos.length;
    
    // Se crea otro arreglo a base del proncipal, pero este solo contiene los 
    // datos que coinciden con la busquedas
    const searchedTodo = todos.filter(
        (todo)=>{
            // Se hace la validación y se convierte en minúsculas para que coincida
            // El include sirve para saber si algo de lo que se escribe lo contiene
            return todo.texto.trim().toLowerCase().includes(searchVal.trim().toLowerCase());
        }
    );

    // Se agrega una función la cual ejecuta el añadir un dato en el arreglo de las tareas
    const agregaTodoFunc = (texto, descripcion)=>{
        let ultimoId = 1;
        // Se agrega validación para obtener el id ultimo.
        if(todos.length > 0){
            // Se obtiene el ultimo id
            // const ultimoArray =  todos.find((todo)=>{
            //     return (parseInt(todo.id) === parseInt(todos.length -1));
            // });
            // Se obtiene el ultimo dato del arreglo
            const ultimoArray = todos[todos.length - 1];
            // Se agrega el valor de id a la variable y se le suma 1 para que sea
            // el siguiente identificadar
            ultimoId = (ultimoArray.id + 1);
        }   
        // Se duplica el arrglo
        const newTodos = [...todos];
        // Se agrega el nuevo elemento
        newTodos.push({id:ultimoId, texto:texto, descripcion:descripcion, completed: false});
        // Se guarda en el estado
        setTodos(newTodos);
    }

    // Esta es una función la cual se encarga de actualizar el estado de completados y el arreglo
    // con los datos completados y no.
    const completeTodoFunc = (key) =>{
        // Se crea un arreglo a base de otro.
        // Al poner los 3 puntos se hace un duplicado
        const newTodos = [...todos]; // significa que va a hacerle una copia
        // Se busca el index de la tarea completada
        const indexTd = newTodos.findIndex(
            (nwtodo) => nwtodo.id === key 
        )
        // Se valida si ya contiene un valor, en caso de ser así, asigna el otro
        const bol = newTodos[indexTd].completed ? false : true;
        // Se asigna el valor al arreglo
        newTodos[indexTd].completed = bol;
        // Se pasa el arreglo al estado y esto hace que actualice los datos donde se asignó
        // Al llamar el hook de localstorage, al ejecutar este estado, actualiza directamente
        // el localstorage, ya que, dentro del hook ejecuta la función de actualización
        setTodos(newTodos);
    }
    // Esta función es igual a la otra, con la única diferencia que esta elimina del arreglo
    const elliminaTodoFunc = (key) =>{
        const newTodos = [...todos]; // significa que va a hacerle una copia
        const indexTd = newTodos.findIndex(
            (nwtodo) => nwtodo.id === key 
        )
        // Elimina el dato del arreglo, se puede usar igual delete
        // Al splice se le pasa el index a eliminar y la cantidad a eliminar
        newTodos.splice(indexTd,1);
        setTodos(newTodos);
    }

    return (
        // Se retorna el provider que proviene del context
        // Para que se tomen los valores, deben estar dentro de un value del provider, para así 
        // estos valores queden globalmente en el context
        <ReactContext.Provider value={{
            countCompletados,
            countTotales,
            searchVal,
            setSearchVal,
            searchedTodo,
            completeTodoFunc,
            elliminaTodoFunc,
            error,
            loading,
            openModal,
            setOpenModal,
            tareaModal,
            saveTareaModal,
            agregaTodoFunc
        }}>
            {/* Se le añade los componentes hijos para que los renderize dentro del provider,
                lo que va a hacer es como si trajera los componentes hasta aquí, así que la logica
                que se tenga aquí,es como si lo tuviera el componente que se encuentra en children
            */}
            { children }
        </ReactContext.Provider>
    );
}


{/* <ReactContext.Provider></ReactContext.Provider> */}
{/* <ReactContext.Consumer></ReactContext.Consumer> */}

// Se exporta el contexto y el componente
export {ReactContext, ReactProvider};