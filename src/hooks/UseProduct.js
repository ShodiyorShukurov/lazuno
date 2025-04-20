import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Api from '../api';

const UseProduct = (id, selectedCategories, selectedColors) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem('lng') || 'uz');

  useEffect(() => {
    const handleStorageChange = () => {
      const newLang =
        localStorage.getItem('lng') == 'ру'
          ? 'ру'
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

  const getPopularCategories = async () => {
    const res = await Api.get(`/categories/filter?lang`);
    return res.data;
  };

  const { data: productData, isLoading: categoryLoading } = useQuery({
    queryKey: [
      'productData',
      currentPage,
      id,
      selectedCategories,
      selectedColors,
      lang,
    ],
    queryFn: async () => {
      if (
        id &&
        id !== 'all' &&
        (selectedCategories?.length == 0 || selectedCategories == undefined) &&
        (selectedColors?.length == 0 || selectedColors == undefined)
      ) {
        const res = await Api.get(
          `/products?take=12&page=${currentPage}&categoryId=${id}`
        );
        return res.data;
      } else {
        const res = await Api.post(
          `/products/filter?take=10&page=${currentPage}&lang=${lang}`,
          {
            color: selectedColors,
            category_id: selectedCategories,
          }
        );
        return res.data;
      }
    },
    enabled: !!currentPage,
  });

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
    open,
    setOpen,
  };
};

export default UseProduct;
