import { useEffect, useState } from "react";
import "./cuadroNovedades.css";
//import { novedadesData } from "../../api/novedadesData.js";
import { GrUpdate } from "react-icons/gr";
import axios from "axios";

export const Novedades = ({novedades, setNovedades}) => {
  //const [novedades, setNovedades] = useState([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState({});

  useEffect(() => {
    const fetchNovedades = async () => {
      try {
        const response = await axios.get("https://novedades-facturacion-backend.vercel.app/novedades");
      
        setNovedades(response.data); // Guarda los datos en el estado
        
      } catch (error) {
        console.error("Error al obtener las novedades", error);
      }
    };
    fetchNovedades(); // Llamar a la función para obtener los datos
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez al montar el componente


  useEffect(() => {
    setNovedades(novedades);

    const guardarEstadoTarea = JSON.parse(localStorage.getItem("tareasFinalizadas"));
    if(guardarEstadoTarea){
      setTareasFinalizadas(guardarEstadoTarea)
    }
    
  }, []);
  

  const tareaFinalizada = (index) => {
    const updatedTareas = {
      ...tareasFinalizadas,
      [index]: true,
    };
    setTareasFinalizadas(updatedTareas);
    localStorage.setItem("tareasFinalizadas", JSON.stringify(updatedTareas));
  };

  const actualizar=(index)=>{
    const actualizarTarea ={
      ...tareasFinalizadas,
      [index]:false
    }
    setTareasFinalizadas(actualizarTarea);
    localStorage.setItem("tareasFinalizadas", JSON.stringify(actualizarTarea))
  }

  return (
    <div className="container-novedades-ingresadas">
      {novedades.map((novedad, index) => (
        <div
          key={index}
          className={`novedades-cuadro ${
            tareasFinalizadas[index] ? "finalizada" : ""
          }`}
        >
          <div className="novedades-parrafo">
            <p> <span className="texto-parrafo">Nombre</span> : {novedad.nombre}</p>
            <p><span className="texto-parrafo">Ciudad:</span>  {novedad.ciudad}</p>
            <p><span className="texto-parrafo">Novedad:</span> {novedad.novedad}</p>
            <p><span className="texto-parrafo">Activo devuelto:</span> {novedad.nombactivoDevueltore}</p>
            <p><span className="texto-parrafo">Activo nuevo:</span> {novedad.activoNuevo}</p>
            <p><span className="texto-parrafo">Activo:</span> {novedad.nombre}</p>
            
            <input type="text" placeholder="valor" />
            <button onClick={() => tareaFinalizada(index)}>Finalizada</button>
            <GrUpdate className="btn-actualizar" onClick={()=>actualizar(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};