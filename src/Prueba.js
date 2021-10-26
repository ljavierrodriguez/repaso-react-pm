import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Prueba = ({ titulo, descripcion, ...props }) => {

    useEffect(() => {
        // componentDidMount
        console.log("Componente Renderizado");
        saludo();

        return () => {
            // componentWillUnmount
            despedirse();
        }
    }, [])


    const saludo = () => {
        alert("Hola como estas?, bienvenido");
    }

    const despedirse = () => {
        alert("Adios, nos vemos mañana");
    }

    return (
        <>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <p>{props.asunto}</p>
        </>
    )
}

Prueba.propTypes = { // string, number, object, func, bool, array 
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
}

export default Prueba;