import { Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Product } from "./Product";
import { NewProduct } from "./NewProduct";
import { ProductsLayout } from "./ProductsLayout";

export function ProductsRoutes() {
  return (
    <Routes>
      {/* <Route element={<ProductsLayout />}> */}
        <Route index element={<Products />} />
        <Route path=":id" element={<Product />} />
        <Route path="new" element={<NewProduct />} />
      {/* </Route> */}
    </Routes>
  );
}
