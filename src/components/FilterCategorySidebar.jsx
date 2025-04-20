import React from 'react';
import { useTranslation } from 'react-i18next';

const FilterCategorySidebar = ({
  open,
  setOpen,
  popularData,
  productColorData,
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
}) => {
  const { t } = useTranslation();
  const [openCategories, setOpenCategories] = React.useState(false);
  const [openColor, setOpenColor] = React.useState(false);

  const [tempSelectedCategories, setTempSelectedCategories] = React.useState(
    selectedCategories || []
  );
  const [tempSelectedColors, setTempSelectedColors] = React.useState(
    selectedColors || []
  );

  React.useEffect(() => {
    if (open) {
      setTempSelectedCategories(selectedCategories || []);
      setTempSelectedColors(selectedColors || []);
    }
  }, [open, selectedCategories, selectedColors]);

  if (!open) return null;

  const handleCheckboxChange = (value) => {
    setTempSelectedCategories((prev) =>
      prev.includes(value.id)
        ? prev.filter((item) => item !== value.id)
        : [...prev, value.id]
    );
  };

  const handleColorChange = (value) => {
    setTempSelectedColors((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const resetFilters = () => {
    setTempSelectedCategories([]);
    setTempSelectedColors([]);
    setSelectedCategories([]);
    setSelectedColors([]);
    setOpen(false);
  };

  const applyFilters = () => {
    setSelectedCategories(tempSelectedCategories);
    setSelectedColors(tempSelectedColors);
    setOpen(false);
  };

  const isChecked = (value, list) => list.includes(value);
  const isCheckedColor = (value, list) => list.includes(value);

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-[#0000003D] backdrop-blur-[24px]"
      />

      <div className="absolute right-0 bottom-0 sm:top-0 w-full sm:max-w-md h-full max-h-[630px] sm:max-h-full bg-white rounded-t-[32px] sm:rounded-tr-none sm:rounded-l-[32px] p-6 overflow-y-auto z-50">
        <div className="flex justify-between items-center pb-6 border-b border-[#E0E4EA]">
          <h2 className="text-[24px] sm:text-[30px]">{t('filter.title')}</h2>
          <button
            className="w-[48px] h-[48px] sm:border border-[#E0E4EA] rounded-full cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 pt-[24px]">
          {/* Categories */}
          <div className="border-b border-[#E0E4EA] pb-4">
            <button
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => setOpenCategories(!openCategories)}
            >
              <h3 className="text-[20px]">{t('filter.button_text1')}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all w-[24px] h-[24px] duration-300 ${
                  openCategories ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M6.42822 9L12.4282 15L18.4282 9"
                  stroke="#15181E"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openCategories && (
              <ul className="space-y-1 mt-4">
                {popularData?.map((item) => (
                  <li key={item.id}>
                    <label className="flex items-center justify-between gap-2 text-[16px]">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked(item.id, tempSelectedCategories)}
                          onChange={() => handleCheckboxChange(item)}
                          className="border border-[#E0E4EA]"
                        />
                        {item.title}
                      </div>
                      <span className="text-[#8292AA]">
                        ({item.product_count})
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Colors */}
          <div>
            <button
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => setOpenColor(!openColor)}
            >
              <h3 className="text-[20px]">{t('filter.button_text2')}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all w-[24px] h-[24px] duration-300 ${
                  openColor ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M6.42822 9L12.4282 15L18.4282 9"
                  stroke="#15181E"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openColor && (
              <ul className="space-y-1 mt-4">
                {productColorData?.map((color) => (
                  <li key={color?.color}>
                    <label className="flex items-center justify-between gap-2 text-[16px]">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isCheckedColor(
                            color.color,
                            tempSelectedColors
                          )}
                          onChange={() => handleColorChange(color.color)}
                          className="border border-[#E0E4EA]"
                        />
                        {color?.color}
                      </div>
                      <span className="text-[#8292AA]">
                        ({color?.product_count})
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="fixed bottom-0 right-0 w-full sm:max-w-md bg-white p-4 z-50 border-t border-[#E0E4EA]">
          <div className="flex items-center gap-4">
            <button
              onClick={resetFilters}
              className="w-full py-4 border border-[#E0E4EA] rounded-full text-[16px] cursor-pointer"
            >
              {t('filter.button_text3')}
            </button>
            <button
              onClick={applyFilters}
              className="w-full pl-[24px] p-[4px] flex items-center justify-between bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] cursor-pointer"
            >
              {t('filter.button_text4')}
              <span className="bg-[#FFFFFF] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                    stroke="#000000"
                    strokeWidth="0.857143"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCategorySidebar;
