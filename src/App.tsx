import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProductsRoutes } from "./pages/Products/ProductsRoutes";
import ResponsiveAppBar from "./pages/NavBar";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<ProductsRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
