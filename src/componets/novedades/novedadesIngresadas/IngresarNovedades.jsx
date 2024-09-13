import { useState } from "react";
import { Novedades } from "../cuadroNovedades/Novedades";
import "./ingresarNovedades.css";
import axios from 'axios';

export const IngresarNovedades = () => {
  const [nextData, setNextData] = useState({
    nombre: "",
    ciudad: "",
    novedad: "",
    activoDevuelto: "",
    activoNuevo: ""
  });

  const [novedades, setNovedades] = useState([]);  // Estado compartido para las novedades
  

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setNextData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const limpiarFormulario =(  )=>{
    setNextData({
      nombre: "",
      ciudad: "",
      novedad: "",
      activoDevuelto: "",
      activoNuevo: ""
    })
  }

  const agregarNovedad  = async (e) => {
    e.preventDefault();  
    try {
      const response = await axios.post('https://novedades-facturacion-backend.vercel.app/novedades', nextData);
      setNovedades(prevNovedades => [...prevNovedades, response.data]);  // Actualiza el estado de novedades
      limpiarFormulario();
    } catch (error) {
      console.error("Error al enviar datos del formulario", error);
    }
   
  };
  return (
    <>
      <form onSubmit={agregarNovedad}>
        <div className="container-novedad">
          <div className="formulario-novedad">
            <label>Nombre</label>
            <input type="text" name="nombre" value={nextData.nombre} onChange={handleChange} />
            <label>Ciudad</label>
            <input type="text" name="ciudad" value={nextData.ciudad} onChange={handleChange} />
            <label>Novedad</label>
            <input type="text" name="novedad" value={nextData.novedad} onChange={handleChange} />
            <label>Activo devuelto</label>
            <input type="text" name="activoDevuelto" value={nextData.activoDevuelto} onChange={handleChange} />
            <label>Activo nuevo</label>
            <input type="text" name="activoNuevo" value={nextData.activoNuevo} onChange={handleChange} />

            <div className="boton-novedad">
              <button type="submit" className="novedad-boton">Agregar</button> {/* Tipo submit */}
            </div>
          </div>
        </div>
        <Novedades novedades={novedades} setNovedades={setNovedades} />  {/* Pasamos el estado y el setter */}
      </form>
    </>
  );
};