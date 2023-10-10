import React from 'react';
import PropTypes from 'prop-types';


function Mostrar({compositores}) {

  return (
    <div>
      <ul>
        <hr/>
        {compositores.map((composer, idComposer) => (
          <li className='slides' key={idComposer}>
            <span>{composer.tarea}<br /></span>
            <span>{composer.imagen}<br /></span>
            <span>{composer.responsable.join(', ')}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

Mostrar.propTypes={
  compositores: PropTypes.array.isRequired,
}

export default Mostrar;
