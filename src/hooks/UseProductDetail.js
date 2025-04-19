import React from 'react';
import Api from '../api';
import { useQuery } from '@tanstack/react-query';

const UseProductDetail = (id) => {
  const [addProduct, setAddProduct] = React.useState();

  const getProductDetail = async () => {
    const res = await Api.get(`/products/${id}`);
    return res.data;
  };

  const { data: productDetailData, isLoading: prroductDetailLoading } =
    useQuery({
      queryKey: ['productDetailData'],
      queryFn: getProductDetail,
    });

  return { productDetailData, prroductDetailLoading, addProduct, setAddProduct };
};

export default UseProductDetail;
