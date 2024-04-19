import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [textoInput, actualizarTextoInput] = useState("");
  let [listadoDeTareas, actualizarListadoDeTareas] = useState([]);
  
  function manejadorDeEventoOnChange(evento){
    actualizarTextoInput(evento.target.value);
  }

  function manejadorDeEventoOnKeyDown(evento){
    if(evento.key === "Enter"){
      let nuevoArray = Array.from(listadoDeTareas);
      nuevoArray.push(textoInput);
      actualizarListadoDeTareas(nuevoArray);
      actualizarTextoInput("");
    }
  }

  function manejadorDeEventoOnClick(indice){
    let nuevoArray = Array.from(listadoDeTareas);
    nuevoArray.splice(indice, 1);
    actualizarListadoDeTareas(nuevoArray);
  }

  return (
    <>
      <h1>Listado de tareas</h1>
      <input type="text" placeholder='¿Qué haremos hoy?' value={textoInput} onChange={manejadorDeEventoOnChange} onKeyDown={manejadorDeEventoOnKeyDown}/>
      <div>
      <ul>
        {
          listadoDeTareas.map((tarea, index)=> {
            return <li key={index}>{tarea} <button className="Button" onClick={()=> manejadorDeEventoOnClick(index)}>X</button></li>
          })
        }
      </ul>
      </div>
      <div>{listadoDeTareas.length} tareas</div>
    </>
  )
}
export default App