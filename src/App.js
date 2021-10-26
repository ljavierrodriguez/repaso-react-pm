import { useEffect, useState } from 'react';
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import Card from './components/Card';
import ModalCreateUsuario from './components/ModalCreateUsuario';
import Prueba from './Prueba';

const App = () => {

    const [persona, setPersona] = useState({
        nombre: '',
        apellido: ''
    })

    const [state, setState] = useState({
        usuarios: [
            { id: 1, nombre: 'James', apellido: 'Bond', nombre_codigo: '007' },
            { id: 2, nombre: 'Sam', apellido: 'Fisher', nombre_codigo: 'Splinter Cell' },
            { id: 3, nombre: 'John', apellido: 'McClane', nombre_codigo: 'Duro de Matar' },
        ],
        show: false,
        seccion: 'Home',
        usuario: {
            nombre: '',
            apellido: '',
            nombre_codigo: ''
        }
    })

    const handleChange = e => {
        const { name, value } = e.target;
        const { usuario } = state;
        usuario[name] = value;
        setState({
            ...state,
            usuario: usuario
        })
    }

    const handleClick = e => {
        const { usuario, usuarios } = state;
        usuario['id'] = usuarios[usuarios.length - 1].id + 1;
        usuarios.push(usuario);

        setState({
            ...state,
            usuario: { nombre: '', apellido: '', nombre_codigo: '' },
            usuarios: usuarios
        })
    }

    const handleChangeShow = e => {
        const { show } = state;
        setState({
            ...state,
            show: !show
        })
    }

    useEffect(() => {
        // componentDidMount
        console.log("Componente Renderizado");
        saludo();

        return () => {
            // componentWillUnmount
            despedirse();
        }
    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Usuario agregado...")
    }, [state.usuarios]);


    const saludo = () => {
        alert("Hola como estas?, bienvenido");
    }

    const despedirse = () => {
        alert("Adios, nos vemos mañana");
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            icon={<FaHtml5 className="fs-1 bg-warning" />}
                            texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque, voluptates non mollitia dolore blanditiis debitis illum ipsa veritatis explicabo, repudiandae repellat, cum ab quasi harum. Aut, excepturi? Aliquam, pariatur?"}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            icon={<FaCss3 className="fs-1 bg-info" />}
                            texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque, voluptates non mollitia dolore blanditiis debitis illum ipsa veritatis explicabo, repudiandae repellat, cum ab quasi harum. Aut, excepturi? Aliquam, pariatur?"}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            icon={<FaJs className="fs-1 bg-warning" />}
                            texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque, voluptates non mollitia dolore blanditiis debitis illum ipsa veritatis explicabo, repudiandae repellat, cum ab quasi harum. Aut, excepturi? Aliquam, pariatur?"}
                        />
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {
                                state.usuarios.length > 0 &&
                                state.usuarios.map((usuario, indice) => {
                                    return (
                                        <li key={indice} className="list-group-item py-3">
                                            {usuario.id} - {usuario.nombre} {usuario.apellido} "{usuario.nombre_codigo}"
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="btn btn-warning my-3" data-bs-toggle="modal" data-bs-target="#agregarUsuarioModal">
                            Agregar Usuario
                        </button>


                    </div>
                </div>
            </div>

            <ModalCreateUsuario
                handleChange={handleChange}
                handleClick={handleClick}
                usuario={state.usuario}
            />

            <button className="btn btn-danger" onClick={handleChangeShow}>
                {state.show ? "Ocultar" : "Mostrar"}
            </button>

            {state.show && (
                <Prueba
                    titulo="Pasando Props a un componente con React"
                    descripcion="Esto es una descripcion de prueba"
                    asunto="Explicacion de Props"
                    asunto2="Explicacion de Props"
                />
            )}
        </>
    )
}

export default App;