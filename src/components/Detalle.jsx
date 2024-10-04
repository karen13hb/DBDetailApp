import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
const Detalle = () => {

  const { id } = useParams(); 
  const [personaje, setPersonaje] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  const getData = async () => {
    try {
      const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      if (!res.ok) throw new Error("Error en la respuesta de la red");
      const data = await res.json();
      console.log(data);
      setPersonaje(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <div>Cargando...</div>; 
  if (error) return <div>Error: {error}</div>;
      return (
        <div className="container my-4">
          <NavLink
            className="btn btn-primary mb-4"
            to="/personajes"
          >
            {"<"} Regresar
          </NavLink>
    
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                style={{
                  maxHeight: "400px",
                  margin: "0 auto",
                }}
                src={personaje.image}
                alt={personaje.name}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Campo</th>
                    <th scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Nombre</th>
                    <td>{personaje.name}</td>
                  </tr>
                  <tr>
                    <th>Planeta de Origen</th>
                    <td>{personaje.originPlanet.name}</td>
                  </tr>
                  <tr>
                    <th>Role</th>
                    <td>{personaje.race}</td>
                  </tr>
                  <tr>
                    <th>Genero</th>
                    <td>{personaje.gender}</td>
                  </tr>
                  <tr>
                    <th>ki</th>
                    <td>{personaje.ki}</td>
                  </tr>
                  <tr>
                    <th>MaxKi</th>
                    <td>{personaje.maxKi}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default Detalle