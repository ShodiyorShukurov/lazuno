import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Api from '../api';

const UseCategory = () => {
  const [lang, setLang] = useState(localStorage.getItem('lng') || 'uz');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const newLang =
        localStorage.getItem('lng') == 'ру'
          ? 'ru'
          : localStorage.getItem('lng') == 'en'
          ? 'en'
          : 'uz';
      setLang(newLang);
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const getCategory = async () => {
    const res = await Api.get(`/categories?take=12&page=1&lang=${lang}`);
    return res.data;
  };

  const getPopularCategories = async () => {
    const res = await Api.get(`/categories/filter?lang=`);
    return res.data;
  };

  const getProductColor = async () => {
    const res = await Api.get(`/products/color?lang=${lang}`);
    return res.data;
  };

  const { data: categoryData, isLoading: categoryLoading } = useQuery({
    queryKey: ['categoryData', lang],
    queryFn: getCategory,
  });

  const { data: popularData, isLoading: popularLoading } = useQuery({
    queryKey: ['popularCategoryData', lang],
    queryFn: getPopularCategories,
  });

  const { data: productColorData, isLoading: productColorLoading } = useQuery({
    queryKey: ['productColorData', lang],
    queryFn: getProductColor,
  });

  return {
    categoryData,
    categoryLoading,
    popularData,
    popularLoading,
    open,
    setOpen,
    productColorData,
    productColorLoading,
  };
};

export default UseCategory;
