import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora/Bitacora";
import Galeria from "./pages/Galeria";
import Perfiles from "./components/Perfiles/Perfiles";
import DataExplorer from "./pages/DataExplorer/DataExplorer";
import RenderTree from "./pages/RenderTree/RenderTree";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="bitacora" element={<Bitacora />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="perfiles/:id" element={<Perfiles />} />
        <Route path="explorador" element={<DataExplorer />} />
        <Route path="arbol" element={<RenderTree />} />
      </Route>
    </Routes>
  );
}

export default App;