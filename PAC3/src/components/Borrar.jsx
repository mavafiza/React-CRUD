// import React from 'react';
import PropTypes from 'prop-types';

function Borrar({ onBorrar }) {
  return (
    <div className='orderButtons'>
      <button onClick={onBorrar}>Borrar</button>
    </div>
  );
}

Borrar.propTypes = {
  onBorrar: PropTypes.func.isRequired
}

export default Borrar;
