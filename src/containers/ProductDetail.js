import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);
  console.log(product);
  return (
    <div className="ui grid container">
      <div className="placeholder segment"></div>
    </div>
  );
};

export default ProductDetail;
