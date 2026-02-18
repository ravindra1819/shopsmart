import React, { useCallback, useEffect, useState } from "react"
import { ProductItem } from "./Child";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (!res.ok) {
          throw new Error("Error fecthing API")
        }
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json()

        const updated = data.map(item => ({
          ...item,
          favorite: false
        }));
        setProducts(updated);
        setLoading(false)
      }
      catch { (err) => console.log(err) }
      finally{setLoading(false)}
    }
    fetchProducts();
  }, [])

  const handleToggleFavorite = useCallback(() => {
    setProducts(prev => prev.map
      (p => p.id === id ? { ...p, favorite: !p.favorite } : p))
  }, []);

  if (loading) return <h3>Loading.....</h3>

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onToggleFavorite={handleToggleFavorite}
        />))}
    </div>
  )
}