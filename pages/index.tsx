import React, { FormEvent, useState } from 'react'

const IndexPage = () => {

    //asi no está generalizada
    /*interface FormDataInterface {
        name: string;
        lastName: string;
        email: string;
        birthday: string;
    }*/

    //generalizar mis interfaces, para poderlas reutilizar tantas veces como las necesite
    interface FormDataInterface {
        [key:string] : string;
    }
    const [formData, setFormData] = useState<FormDataInterface>({
        name: '',
        lastName: '',
        email: '',
        birthday: '',
        enterprise: ''
    });


    // e -> informacion del evento
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        // no se va redirigir a ninguna parte
        e.preventDefault();
        console.log('se enviaron los datos del form');
        console.log('los datos del usuario son: ', formData);
    };


  return (
    <div className='flex flex-col items-center p-10 gap-4'>
        <h1>Formulario de info personal</h1>
        <form onSubmit={submitForm}>
            <div className='grid grid-cols-2 gap-4'>
            <label htmlFor="name">
                <span>Nombre</span>
                <input
                value={formData.name}
                onChange={(e) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value});
                }}
                type="text"
                name='name'
                placeholder='Mi nombre'/>
            </label>
            <label htmlFor="lastName">
                <span>Apellido</span>
                <input
                value={formData.lastName}
                onChange={(e) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value});
                }}
                type="text"
                name='lastName'
                placeholder='Mi apellido'/>
            </label>
            <label htmlFor="email">
                <span>Correo</span>
                <input
                value={formData.email}
                onChange={(e) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value});
                }}
                type="email"
                name='email'
                placeholder='correo@correo.com'/>
            </label>
            <label htmlFor="birthday">
                <span>Fecha de nacimiento</span>
                <input
                value={formData.birthday}
                onChange={(e) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value});
                }}
                type="date"
                name='birthday'/>
            </label>
            <label htmlFor="enterprise">
                <span>Empresa</span>
                <input
                value={formData.enterprise}
                onChange={(e) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value});
                }}
                type="text"
                name='enterprise'/>
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