import { useState } from 'react';

const useFilter = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
};

export default useFilter;
