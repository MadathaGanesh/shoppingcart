import { Route, Routes } from "react-router";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
