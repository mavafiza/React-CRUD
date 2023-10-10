import React, { useState } from 'react';
import { Borrar, Cancelar} from '.'
import PropTypes from 'prop-types';

function Editar({editIndex, setEditIndex, compositores, onEditar }) {
  const [compositorOriginal, setCompositorOriginal] = useState({});
  const [actualizarDatos, setActualizarDatos] = useState({
    tarea: '', imagen: '', responsable: ''
  });

  function habilitarEdicion(index) {
    setEditIndex(index);
    editarCompositor(index);
  }

  function editarCompositor(index) {
    setCompositorOriginal(compositores[index]);
  }

  function actualizarCompositor(index) {
    const newArray = [...compositores];
    newArray[index] = {
      tarea: actualizarDatos.tarea,
      imagen: actualizarDatos.imagen,
      responsable: actualizarDatos.responsable.split(',')
    };
    onEditar(newArray);
    setEditIndex(-1);
  }

  function cancelarEdicion() {
    setActualizarDatos({ ...compositorOriginal });
    setEditIndex(-1);
  }


  function agregarCambios(event) {
    setActualizarDatos({ ...actualizarDatos, [event.target.name]: event.target.value });
  }

  return (
    <>
      {compositores.map((composer, idComposer) => (
        <li key={idComposer}>
          {editIndex === idComposer ? (
            <>
              <input name='tarea' type="text" placeholder='agrega composer' value={actualizarDatos.tarea} onChange={agregarCambios} />
              <input name='imagen' type="text" placeholder='agrega imagen' value={actualizarDatos.imagen} onChange={agregarCambios} />
              <input name='responsable' type="text" placeholder='agrega responsable' value={actualizarDatos.responsable} onChange={agregarCambios} />
              <div className='orderButtons'>
                <button onClick={() => actualizarCompositor(idComposer)}>Actualizar</button>
                <Cancelar onCancelar={cancelarEdicion} />
              </div>
            </>
          ) : (
            <>
              <span>{composer.tarea}<br /></span>
              <span>{composer.imagen}<br /></span>
              <span>{composer.responsable.join(', ')}</span>
              <div className='orderButtons'>
                <button onClick={() => habilitarEdicion(idComposer)}>Editar</button>
                  <Borrar compositores={compositores} onBorrar={() => onEditar(compositores.filter((_, idx) => idx !== idComposer))} />
              </div>
            </>
          )}
        </li>
      ))}
    </>
  );
}

Editar.propTypes = {
  compositores: PropTypes.array.isRequired,
  editIndex: PropTypes.number.isRequired,
  setEditIndex: PropTypes.func.isRequired,
  onEditar: PropTypes.func.isRequired
}

export default Editar;
