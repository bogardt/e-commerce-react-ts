import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../../interfaces/Product";
import ProductCard from "./ProductCard";

export function Products() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    { id: 0, name: "0" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ]);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Product[]>("http://localhost:3001/api/products")
      .then((res: any) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err.message);
        setLoading(false);
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
                <ProductCard
                  product={product}
                  index={index}
                  loading={loading}
                />
                <br />
              </div>
            ))}
          </Grid>
        </Box>
      </>
    </>
  );
}
