import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../redux/actions/productsActions';


const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () =>{
    const reponse = await axios
      .get(`http://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(reponse.data));
  };
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails