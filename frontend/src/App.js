import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddClient from "./pages/AddClient";
import Calendar from "./pages/Calendar";
import ListingClients from "./pages/ListingClients";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<ListingClients />} />
        <Route path="/add-cliente" element={<AddClient />} />
        <Route path="/edit-cliente/:id" element={<AddClient />} />
      </Routes>
    </>
  );
}

export default App;