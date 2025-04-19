import React from 'react';
import Api from '../api';
import { useQuery } from '@tanstack/react-query';

const UseProductDetail = (id) => {
  const [addProduct, setAddProduct] = React.useState();

  const getProductDetail = async () => {
    if(!id) return
    const res = await Api.get(`/products/${id}`);
    return res.data;
  };

  const { data: productDetailData, isLoading: prroductDetailLoading } = useQuery({
    queryKey: ['productDetailData', id], // id ni queryKey ga qo‘shish ham cache uchun foydali
    queryFn: getProductDetail,
    enabled: !!id, // ✅ id mavjud bo‘lsa query ishlaydi
  });

  return { productDetailData, prroductDetailLoading, addProduct, setAddProduct };
};

export default UseProductDetail;
