import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg my-5 text-center">
        Añade paciente y {""} <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" name="" id="nombre" placeholder="Nombre Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input type="text" name="" id="Propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" name="" id="email" placeholder="Correo electrónico" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de salida</label>
          <input type="date" name="" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>
        
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea  name="" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder='Describe los sintomas' />
        </div>

        <input type="submit"  className='bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all' value='Agregar paciente'/>
      </form>
    </div>
  )
}

export default Form