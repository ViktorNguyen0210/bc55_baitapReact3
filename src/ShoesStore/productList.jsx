import React from "react";
import ProductItem from "./productItem";

export default function productList({
  listProduct,
  handleProductDetails,
  handleCart,
}) {
  return (
    <div className="container listProduct__content">
      <div className="row">
        {listProduct.map((item) => {
          return (
            <div key={item.id} className="col-md-3">
              <ProductItem
                item={item}
                handleProductDetails={handleProductDetails}
                handleCart={handleCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
