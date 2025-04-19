import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Api from '../api';

const UseProduct = (id) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getProduct = async () => {
    const res = await Api.get(
      `/products?take=12&page=${currentPage}&categoryId=${id}`
    );
    return res.data;
  };

  const getPopularCategories = async () => {
    const res = await Api.get(`/categories/filter?lang`);
    return res.data;
  };

  // 1️⃣ Query
  const { data: productData, isLoading: categoryLoading } = useQuery({
    queryKey: ['productData', currentPage],
    queryFn: getProduct,
  });

  // // 2️⃣ Query
  const { data: popularData, isLoading: popularLoading } = useQuery({
    queryKey: ['popularCategoryData'],
    queryFn: getPopularCategories,
  });

  return {
    productData,
    categoryLoading,
    popularData,
    popularLoading,
    currentPage,
    setCurrentPage,
  };
};

export default UseProduct;
