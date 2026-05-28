import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="bitacora" element={<Bitacora />} />
        <Route path="galeria" element={<Galeria />} />
      </Route>
    </Routes>
  );
}

export default App;