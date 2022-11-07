import React, { useState }  from 'react';
import './App.css';

import { Container, Row } from 'reactstrap';

import { listaProductos } from './listaProductos.json';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
// import { useState, useEffect } from "react";

function App() {
  // console.log(listaProductos);
  const [count, setCount] = useState(0)

  /* function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      setTasks(data)
    }, [])

    return (
      <>
      <Navegacion tasks/>
      <Producto tasks= {tasks}/>

      </>
    )    
  } */

  const arregloComponentes = listaProductos.map(
    (listaProductos, i) => {
      return (
        <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          count={count}
          boton={(() => setCount((count) => count + 1))}
        />
      )
    }
  )
  return (
    <Container>
      <Navegacion titulo='Sitio de compras' />
      <Row>
        {arregloComponentes}
      </Row>
    </Container>
  )
}

export default App;
