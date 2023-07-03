import React, { useState } from 'react';

function GymInscriptionForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor o mostrar un mensaje de éxito.
    console.log('Datos enviados:', { nombre, apellido, dni });
  };

  return (
    <div>
      <h1 className='FormularioTitulo'>Formulario de Inscripción</h1>
      <div className='PartesdeForm'>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleNombreChange} />
          <br></br>
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={handleApellidoChange} />
          <br></br>
        </label>
        <br />
        <label>
          DNI:
          <input type="text" value={dni} onChange={handleDniChange} />
          <br></br>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      </div>
    </div>
  );
}

export default GymInscriptionForm;