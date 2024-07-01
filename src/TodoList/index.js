/* ESTE ES UN COMPONENTE CONTENEDOR LISTADO DE LAS TAREAS */


// Se crea el componente para el listado de las tareas
function TodoList(props) {
    return (
      // Se crea el ul con sus estilos
      <ul style={{listStyle:'none', padding: '0px'}}>
        {/* Se indica que los hijos de este componente se asignen aqui
            dentro, por eso se llaman children y así podrán generarse
            dentro del ul
         */}
        {props.children}
      </ul>
    );
  }

  // Se exporta el componente
  export { TodoList };