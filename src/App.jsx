import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetail from "./Pages/ProductDetail";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
