import { Link, Outlet } from "react-router-dom";

export function ProductsLayout() {
  return (
    <>
      <Link to="/products/new">New Product</Link>
      <br />
      <br />
      <Link to="/products/1">Product 1</Link>
      <br />
      <Link to="/products/2">Product 2</Link>
      <br />
      <Outlet context={{ hello: "World" }} />
    </>
  );
}
