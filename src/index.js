import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';

/* import Prueba from './Prueba'; */

/* ReactDOM.render(
    <Prueba
        titulo="Pasando Props a un componente con React"
        descripcion="Esto es una descripcion de prueba"
        asunto="Explicacion de Props"
        asunto2="Explicacion de Props"
    />,
    document.querySelector('#root')
); */

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);