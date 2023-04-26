import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route  path="/product" element={<Product />} />
        <Route  path="/productList" element={<ProductList />} />
        </Routes>
    </div>
  );
}

export default App;
