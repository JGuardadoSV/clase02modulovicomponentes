import React from "react";

const Tabla = ({usuarios}) => {
    return (
        <>
        <h1>Listado de Usuarios v2</h1>
        <p>Total de usuarios {usuarios.length}</p>
        <p>Suma total de ahorro {usuarios.reduce((total, usuario) => total + Number(usuario.ahorro), 0)}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ahorro</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.ahorro}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
}

export default Tabla;