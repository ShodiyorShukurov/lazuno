import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Api from '../api';

const UseCategory = () => {
  const [lang, setLang] = useState(localStorage.getItem('lng') || 'ru');

  useEffect(() => {
    const handleStorageChange = () => {
      const newLang =
        localStorage.getItem('lng') == 'uz'
          ? 'uz'
          : localStorage.getItem('lng') == 'en'
          ? 'en'
          : 'ru';
      setLang(newLang);
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // 1️⃣ Kategoriya olish
  const getCategory = async () => {
    const res = await Api.get(`/categories?take=12&page=1&lang=${lang}`);
    return res.data;
  };

  // // 2️⃣ Mashhur kategoriyalarni olish
  const getPopularCategories = async () => {
    const res = await Api.get(`/categories/filter?lang=${lang}`);
    return res.data;
  };

  // 1️⃣ Query
  const { data: categoryData, isLoading: categoryLoading } = useQuery({
    queryKey: ['categoryData', lang],
    queryFn: getCategory,
  });

  // // 2️⃣ Query
  const { data: popularData, isLoading: popularLoading } = useQuery({
    queryKey: ['popularCategoryData', lang],
    queryFn: getPopularCategories,
  });

  return {
    categoryData,
    categoryLoading,
    popularData,
    popularLoading,
  };
};

export default UseCategory;
