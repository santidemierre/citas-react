import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [ pacientes, setPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  
  const [paciente, setPaciente] = useState({})


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto my-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        // Prop | Funcion o variable
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />  
      </div>
    </div>
  )
}

export default App