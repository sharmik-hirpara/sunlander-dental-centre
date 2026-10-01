import "./App.css";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Container from "./components/ui/Container";
import CosmeticDentistry from "./components/CosmeticDentistry";
import DentalImplants from "./components/DentalImplants";
import DentalFillings from "./components/DentalFillings";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Invisalign from "./components/Invisalign";
import Orthodontics from "./components/Orthodontics";
import PreventiveDental from "./components/PreventiveDental";
import Periodontics from "./components/Periodontics";
import TeethWhitening from "./components/TeethWhitening";

function App() {
  return (
    <main>
      <Container className="bg-white sticky top-0 z-10">
        <Router basename="/sunlander-dental-centre">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cosmeticdentistry" element={<CosmeticDentistry />} />
            <Route path="/dentalfillings" element={<DentalFillings />} />
            <Route path="/preventiveDental" element={<PreventiveDental />} />
            <Route path="/orthodontics" element={<Orthodontics />} />
            <Route path="/invisalign" element={<Invisalign />} />
            <Route path="/dentalImplants" element={<DentalImplants />} />
            <Route path="/periodontics" element={<Periodontics />} />
            <Route path="/teethwhitening" element={<TeethWhitening />} />
          </Routes>
          <Footer />
        </Router>
      </Container>
    </main>
  );
}

export default App;
