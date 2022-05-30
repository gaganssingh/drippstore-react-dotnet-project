import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Catalog } from "../../features/catalog/Catalog";
import { Product } from "../models/product";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const addProduct = () =>
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: `product${prevState.length + 1}`,
        price: 300.0,
        brand: "dummy",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);

  return (
    <>
      <Typography variant="h1">dripp</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
};

export default App;