import './App.css'
import { Facturacion } from './componets/facturacion/Facturacion';
import Navbar from './componets/nav/Navbar'
import { IngresarNovedades } from './componets/novedades/novedadesIngresadas/IngresarNovedades'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/'element={<IngresarNovedades/>}/>
      <Route path='/facturacion'element={<Facturacion/>}/>
    </Routes>
     
    </Router>
  )
}

export default App
