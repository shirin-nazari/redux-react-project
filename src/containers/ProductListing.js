import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchingProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("error", err));

    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchingProducts();
  }, []);
  console.log("products :", products);
  return (
    <div className="ui grid container ">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
