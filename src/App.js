import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Container from './components/ui/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import CosmeticDentistry from './components/CosmeticDentistry';


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
          </Routes>
        <Footer />
      </Router>
    </Container>  
    </main>
  );
}

export default App;
