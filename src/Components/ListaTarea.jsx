import React from "react";
import ItemTarea from "./ItemTarea";
import ListGroup from "react-bootstrap/ListGroup";

const ListaTarea = ({arregloTarea, borrarTarea}) => {
  return (
    <ListGroup>
        {
            arregloTarea.map((tarea, posicion)=>  <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea> )
        }
     
    </ListGroup>
  );
};

export default ListaTarea;
