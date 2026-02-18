import React from "react"

export const ProductItem = React.memo(({product , onToggleFavorite}) => {
  console.log("Rendered:", product.title)

  return(
    <div style={{border: "1px solid gray", margin : "10px" , padding: "10px"}}>
      <h4>{product.title}</h4>
      <p>Favorite: {product.favorite ? "Yes" : "No"}</p>
      <button onClick={() => onToggleFavorite(product.id)}>
        Toggle Favorite
      </button>

    </div>
  )
});