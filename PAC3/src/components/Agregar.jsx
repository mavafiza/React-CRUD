import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Agregar({compositores, setCompositores, mostrarFormulario, setMostrarFormulario}) {
  const [actualizarDatos, setActualizarDatos] = useState({
    tarea: '', imagen: '', responsable: ''
  });

  // const [mostrarFormulario, setMostrarFormulario] = useState(false);

  function agregarCambios(event) {
    setActualizarDatos({ ...actualizarDatos, [event.target.name]: event.target.value });
  }
  //---------------
    function ocultarFormulario() {
    setMostrarFormulario(false);
  }
  //---------------

  function actualizarArray() {
    const newComposer = {
      tarea: actualizarDatos.tarea,
      imagen: actualizarDatos.imagen,
      responsable: actualizarDatos.responsable.split(',')
    };
    setCompositores([...compositores, newComposer]);
    setActualizarDatos({
      tarea: '', imagen: '', responsable: ''
    });
//    setMostrarFormulario(false);   //
    ocultarFormulario(); // Llama a la función para ocultar el formulario
  }
  


  return (
      <div className='popup'>
        <div className='centrar popup-content'>
          {mostrarFormulario && ( // Mostrar el formulario solo cuando mostrarFormulario sea true
            <form>
              <input name='tarea' type="text" value={actualizarDatos.tarea} placeholder='agrega tarea' onChange={agregarCambios} />
              <input name='imagen' type="text" value={actualizarDatos.imagen} placeholder='agrega imagen' onChange={agregarCambios} />
              <input name='responsable' type="text" value={actualizarDatos.responsable} placeholder='agrega responsable' onChange={agregarCambios} />
              <div className='orderButtons'>
                <button onClick={actualizarArray}>Agregar elemento</button>
                <button onClick={ocultarFormulario}>Cancelar</button>
                {/* <button onClick={() => setMostrarFormulario(false)}>Cancelar</button> */}
              </div>
            </form>
          )}
        </div>
      </div>
  );
}
Agregar.propTypes={
  compositores: PropTypes.array.isRequired,
  setCompositores: PropTypes.func.isRequired,
  mostrarFormulario: PropTypes.element.isRequired,
  setMostrarFormulario: PropTypes.func.isRequired
}
export default Agregar;
