import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../../interfaces/Product";
import ProductCard from "./ProductCard";

export function Products() {
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3001/api/products")
      .then((res: any) => setProducts(res.data))
      .catch((err: any) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>

      {/* <Link to="/products/new">New Product</Link> */}
      <br />

      <>
        {error && <p>{error}</p>}
        <Box sx={{ flexGrow: 1, margin: 4 }}>
          <Grid container spacing={3}>
            {products.map((product: Product, index: number) => (
              <div key={product.name}>
                <ProductCard product={product} index={index} />
                <br/>
              </div>
            ))}
          </Grid>
        </Box>
      </>
    </>
  );
}
