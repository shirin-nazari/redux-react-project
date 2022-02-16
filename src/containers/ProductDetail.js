import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, price, image, category, description } = product;
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
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  console.log(product);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>loading...</div>
      ) : (
        <div className="placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img src={image} alt={title} className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="#" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
