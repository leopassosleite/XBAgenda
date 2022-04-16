import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LinstingClients from "./pages/ListingClients";
import AddClient from "./pages/AddClient";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<LinstingClients />} />
        <Route path="/add-cliente" element={<AddClient />} />
        <Route path="/edit-cliente/:id" element={<AddClient />} />
      </Routes>
    </>
  );
}

export default App;