import { Novedades } from "../cuadroNovedades/Novedades";
import "./ingresarNovedades.css";

export const IngresarNovedades = () => {
  return (
    <>
    <div className="container-novedad">
      <div className="formulario-novedad">
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">ciudad</label>
        <input type="text" />
        <label htmlFor="">Novedad</label>
        <input type="text" />
        <label htmlFor="">Activo devuelto</label>
        <input type="text" />
        <label htmlFor="">Activo nuevo</label>
        <input type="text" />

        <div></div>
        <div className="boton-novedad">
          <button className="novedad-boton">Agregar</button>
        </div>
      </div>
    </div>
    
     <Novedades/>
    </>
   
  );
};
