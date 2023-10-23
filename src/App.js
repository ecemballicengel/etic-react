import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UrunlerList from "./components/UrunlerList";
import FiltreliUrunList from "./components/FiltreliUrunList";
import Sepet from "./components/Sepet";
import Favoriler from "./components/Favoriler";
import UrunDetay from "./components/UrunDetay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UrunlerList />}></Route>
        <Route path="/category/:name" element={<FiltreliUrunList />}></Route>
        <Route path="/urundetay/:id" element={<UrunDetay />}></Route>
        <Route path="/sepet" element={<Sepet />}></Route>
        <Route path="/favoriler" element={<Favoriler />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
