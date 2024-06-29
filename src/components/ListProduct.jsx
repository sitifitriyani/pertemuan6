import { useState } from "react";

export default function ListProduct({
  product,
  handleEditProduct,
  handleDeleteProduct,
}) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(product.name);
  const [harga, setHarga] = useState(product.harga);

  const handleSave = () => {
    handleEditProduct(product.id, name, harga);
    setEdit(false);
  };
  return (
    <div className="border border-black p-3">
      {!edit ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.harga}</p>
          <div className=" flex justify-around gap-4">
            <button onClick={() => setEdit(true)} className="bg-cyan-700 p-1 rounded-md">
              edit
            </button>
            <button onClick={handleDeleteProduct} className="bg-cyan-700 p-1 rounded-md">
              delete
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
          <button onClick={handleSave}>save</button>
        </>
      )}
    </div>
  );
}
