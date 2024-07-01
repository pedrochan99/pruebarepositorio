/* ESTE ES UN HOOK PARA LOCAL STORAGE */

// Se importa la librería de react
import React from 'react';
// Se crea una función de tipo hook, esto para poder actualizar
// su estado y obtener información que este retorna.
// Este sería como el de useState por ejemplo.
function useLocalStorage(itemName, iniValue){
    
    // Se crea un estado local para manejar los datos
    // A este estado se le pasa un valor por defecto, este puede
    // ser lo encontrado en el local y si no, sería el parámetro
    // que se pasa mediante el hook
     const [item, setItem] = React.useState(iniValue);

    // Se crea un estado para la carga, este utiliza el hook
    // que trae react. Inicia con true indicando que está cargando
     const [loading, setLoading] =  React.useState(true);

     // Se crea un estado para errores, este utiliza el hook
    // que trae react. Inicia con errores en falso, no tiene
    const [error, setError] =  React.useState(false);

      // Se utilia un hook llamado effect el cual se ejecuta al iniciar la 
      // aplicación, pero para que se vuelva a ejecutar, se le debe pasar como
      // segundo parámetro un array con un estado (o vacio), para que cuando se actualice ese
      // estado o cualquier parámetro, se ejecute el effect, como primer parámetro se
      // le pasa la función, si no se le pasa un segundo parámetro siemmpre se ejecutará
      // al renderizar
     React.useEffect(()=>{
      setTimeout(()=>{
        try{
          let itemValue;
          // Se toma los datos de un localStorage que se guarda al momento de crear
          // una tarea nueva
          let parsedItem = localStorage.getItem(itemName);
            // Se añade validación por si no  existe el localStorage
          itemValue = parsedItem ? JSON.parse(parsedItem) : iniValue;
          // Se le cambia el valor al estado de carga
          setLoading(false);
          // Se valida si es diferente el dato inicial al que viene del localstorage,
          // en caso de que sea diferente, actualiza el dato del arreglo.
          if(itemValue !== iniValue){
            setItem(itemValue);
          }
        }catch(e){
          // Se cambia el estado de carga y el estado de error pasa a estar activo
          setLoading(false);
          setError(true);
        }
      }, 2000);
     },[]);
    
    
    // Se crea una función que actualiza el estado local
     const saveItem = (newItem) =>{
       const itemString = JSON.stringify(newItem);
       localStorage.setItem(itemName,itemString);
        // Se guarda en el estado local
       setItem(newItem);
     }
    // Se retorna el valor del es tado local
    // Se retorna la función que actualiza el estado local
     return {item, saveItem, error, loading};
    //  return [item, saveItem];
    //  Como se pasan más de 2 parámetros, es recomendable pasarlo
    // como un objeto, así podrá identificar cada uno sin necesidad 
    // de saber su posición


    // Se añade el guardado de los arreglos modifcados
     // Esto es porque al asignarle el estado de todos
     // lo convierte en un estado derivado y cuando este
     // se mofidifica, renderiza todo donde se ha llamado
     // const setLocalTodos = JSON.stringify(todos);
     // localStorage.setItem('todosDatosV1',setLocalTodos);
     //De igual manera se puede crear una función para actualizar
     // el localStorage y el estado. 
 }

//  Se exporta el hook
 export {useLocalStorage}