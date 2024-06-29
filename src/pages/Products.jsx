import { useState } from "react";
import ListProduct from "../components/ListProduct";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "sandal",
      harga: 40000,
    },
    {
      id: 2,
      name: "sepatu",
      harga: 400000,
    },
  ]);
  
  const [productName, setProductName] = useState("");
  const [productHarga, setProductHarga] = useState("");
  const handleAddProduct = () => {
    if (!productName || !productHarga) return;
    const newProduct = {
      id: products.length + 1,
      name: productName,
      harga: productHarga,
    };
    setProducts([...products, newProduct]);
    productName("");
    productHarga("");
  };

  const handleEditProduct = (id, newName, newHarga) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, name: newName, harga: newHarga }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (id) => {
    const deleteProduct = products.filter((product) => product.id !== id);
    setProducts(deleteProduct);
  };
  return (
    <div>
      <div className="flex gap-4 p-7 ">
        {products.map((p) => (
          <ListProduct
            key={p.id}
            product={p}
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={() => handleDeleteProduct(p.id)}
          />
        ))}
      </div>

      <input
        type="text"
        placeholder="product name"
        className=" border border-black rounded-md"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="product harga"
        className=" border border-black rounded-md"
        value={productHarga}
        onChange={(e) => setProductHarga(e.target.value)}
      />
      <button onClick={handleAddProduct}>Tambah</button>
    </div>
  );
}
