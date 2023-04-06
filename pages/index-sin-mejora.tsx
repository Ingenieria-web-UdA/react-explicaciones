import React, { useState } from 'react'

const IndexPage = () => {

    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birthday, setBirthday] = useState<string>('');


    // e -> informacion del evento
    const submitForm = (e) => {
        // no se va redirigir a ninguna parte
        e.preventDefault();
        console.log('se enviaron los datos del form');
        console.log('los datos del usuario son: ', name, lastName, email, birthday);
    };


  return (
    <div className='flex flex-col items-center p-10 gap-4'>
        <h1>Formulario de info personal</h1>
        <form onSubmit={submitForm}>
            <div className='grid grid-cols-2 gap-4'>
            <label htmlFor="name">
                <span>Nombre</span>
                <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                type="text"
                name='name'
                placeholder='Mi nombre'/>
            </label>
            <label htmlFor="lastName">
                <span>Apellido</span>
                <input
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                type="text"
                name='lastName'
                placeholder='Mi apellido'/>
            </label>
            <label htmlFor="email">
                <span>Correo</span>
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                type="email"
                name='email'
                placeholder='correo@correo.com'/>
            </label>
            <label htmlFor="birthday">
                <span>Fecha de nacimiento</span>
                <input
                value={birthday}
                onChange={(e) => {
                    setBirthday(e.target.value);
                }}
                type="date"
                name='birthday'/>
            </label>
            </div>
            <div className='flex justify-center gap-3 m-4'>
            <button type = "submit" className='button-primary'>Enviar datos</button>
            <button className='button-secondary'>Cancelar</button>
            </div>
        </form>
    </div>
  );
}

export default IndexPage;