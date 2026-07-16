import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./pages/Inicio/Inicio";
import Nosotros from "./pages/Nosotros/Nosotros";
import Contacto from "./pages/Contacto/Contacto";
import Disco from "./pages/Disco/Disco";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import RutaProtegida from "./components/RutaProtegida/RutaProtegida";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/disco/:id" element={<Disco />} />
          <Route
            path="/dashboard"
            element={
              <RutaProtegida>
                <Dashboard />
              </RutaProtegida>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
