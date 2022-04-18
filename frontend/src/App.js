import Home from "./pages/Home";
import Navbar from "./asrcTESTE/components/Navbar";
import { Routes, Route } from "react-router-dom";
import LinstingClients from "./pages/ListingClients";
import AddClient from "./pages/AddClient";
import Footer from "./asrcTESTE/layout/Footer";
import Calendar from "./pages/Calendar";
import NewProject from "./pages/newProject";
import HomeFake from "./asrcTESTE/pages/Home";
import Container from "./asrcTESTE/layout/Container";
import Projects from "./asrcTESTE/pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<HomeFake />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;