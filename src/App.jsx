import React,{useState} from 'react';

import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

const App=()=> {
  const [pacientes, setpacientes] = useState([]);
  return (
    <div className="container mx-auto mt-1 ">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setpacientes={setpacientes}
        />
        <ListPatients/>
      </div>
    </div>
  )
}

export default App
