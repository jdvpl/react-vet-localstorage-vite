import React from 'react'
import Paciente from './Paciente'

const ListPatients = () => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        Listado de pacientes
      </h2>
      <p className="text-xl my-5 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
    </div>
  )
}

export default ListPatients