import './App.css';
import { useState } from 'react';
import Tabla from './Tabla';

function App() {

  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [ahorro, setAhorro] = useState(0);

  function enviarDatos (e)  {
    e.preventDefault();
    const datos = {"id":id, "nombre":nombre, "email":email, "ahorro":ahorro};
    // ... operador de propagación
    setUsuarios([...usuarios, datos]);
    setId(0);
    setNombre("");
    setEmail("");
    setAhorro(0);
    console.log(usuarios);
  }
 
  return (
    
    <div className="App">

      <form onSubmit={enviarDatos}>
        <label>Id</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Ahorro</label>
        <input type="number" value={ahorro} onChange={e => setAhorro(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>


      <Tabla usuarios={usuarios} />

      <Tabla usuarios={usuarios} />

    </div>
  );
}

export default App;
