import React from 'react';
import PropTypes from 'prop-types';


function Cancelar({ onCancelar }) {
  return (
    <div className='orderButtons'>
      <button onClick={onCancelar}>Cancelar</button>
    </div>
  );
}

Cancelar.propTypes={
  onCancelar: PropTypes.func.isRequired
}

export default Cancelar;
