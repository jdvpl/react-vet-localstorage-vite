import React from 'react'

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-gray-700 mb-3">Nombre: {""}
          <span className="font-normal normal-case">Jiren</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Propietario: {""}
          <span className="font-normal normal-case">Kakaroto</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Email: {""}
          <span className="font-normal normal-case">kakaroto@gmail.com</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Fecha: {""}
          <span className="font-normal normal-case">14 de 05 del 2022</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Síntomas: {""}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolorem labore repudiandae aliquid ipsa sint accusantium provident excepturi amet illum similique, rem iste numquam minima corporis magni enim atque tempora.</span>
        </p>
      </div>
  )
}

export default Paciente