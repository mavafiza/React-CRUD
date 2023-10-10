import { useState } from 'react';
import { compositoresArray } from '../constants/index.js';
import { Agregar, Editar} from './index.js'


function Container() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [compositores, setCompositores] = useState(compositoresArray)
  const [editIndex, setEditIndex] = useState(-1);


  function handleEditar(updatedCompositores) {
    setCompositores(updatedCompositores);
  }

  return (
    <>
      <div className='container'>
        <Editar 
          editIndex={editIndex} 
          setEditIndex={setEditIndex} 
          compositores={compositores} 
          onEditar={handleEditar} />
      </div>

      {mostrarFormulario ? (
        <Agregar 
          compositores={compositores} 
          setCompositores={setCompositores} 
          mostrarFormulario={mostrarFormulario}
          setMostrarFormulario={setMostrarFormulario}
        />
      ) : (
        <button 
          className='addButton'
          onClick={() => 
          setMostrarFormulario(true)}>Add Duty</button>
      )}
    </>
  );
}

export default Container;
