import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/store/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div className="product-detail">
      {product ? (
        <ProductView product={product} productId={id} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default ProductDetail;
