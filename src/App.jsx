import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

const App=()=> {

  return (
    <div className="container mx-auto mt-1">
      <Header/>
      <div className="mt-12 md:flex">
        <Form/>
        <ListPatients/>
      </div>
    </div>
  )
}

export default App
