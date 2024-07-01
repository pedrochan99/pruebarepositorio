/* ESTE ES UN COMPONENTE PARA EL LLAMADO DE LOS SVG */

//Se importa los svg mediante el ReactComponent, esto es obligatorio ya que, solo de esta
//manera se puede importar los svg, pero se le puede cambiar el nombre como es el caso en estos,
//para cambiarlo solamente se le pone el as y luego el nombre, es importante iniciar con mayúscula
//como si fuera un componente, ya que se usará como este, por ultimo, se pone la ruta del svg
import {ReactComponent as CheckSVG} from '../svgs/check.svg';
import {ReactComponent as DeletSVG} from '../svgs/delete.svg';

//El identificador de cada objeto es igual a lo que se pasa en la propiedad type, esto para coincidir y encontrar el correspondiente
//El valor se convierte en función para recibir la propiedad que se pondrá en el svg
//Dentro de la función llamamos el svg como si fuera un componente y le pasamos el color como fill
const iconTypes = {
    "check": (color)=> <CheckSVG className='idenSVG' fill={color} />,
    "delete": (color)=> <DeletSVG className='idenSVG' fill={color} />
};

//Se define el componente de los iconos
function TodoIcon(props){
    return (
        // Se crea el span con las propiedades correspondientes de onclick, clases, etc.
        <span className={props.clases} onClick={props.onClickEvent}>
            {/* Se llama al objeto con los svg, luego mediante el type se filtra
            para devolver el svg correspondiente, de igual manera, se le pasa entre
            parentesis la propiedad color para que lo reciba la función del objeto. */}
            {iconTypes[props.type](props.color)}
        </span>
    );
}

// Se exporta el componente
export {TodoIcon};