import { useQuery } from '@tanstack/react-query';
import Api from '../api';

const UseSimilar = () => {
  const { data: similarData, isLoading: similarLoading } = useQuery({
    queryKey: ['similarData'],
    queryFn: async () => {
      const res = await Api.post(`/products/filter?take=4&page=1`, {
        color: [],
        category_id: [],
      });
      return res.data;
    },
  });

  return {
    similarData,
  };
};

export default UseSimilar;
