import React from 'react';

const FilterSidebar = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-[#0000003D] backdrop-blur-[24px]"
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 w-full max-w-md h-full bg-white shadow-lg rounded-l-2xl p-6 overflow-y-auto z-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Filters */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-1">
              {['Sofa', 'Bed', 'Side Table', 'Coffee Table', 'Chair'].map((item) => (
                <li key={item}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Filter by Brands</h3>
            <ul className="space-y-1">
              {['Rockler', 'Juste', 'Ashby', 'Cubo', 'BlindStone'].map((brand) => (
                <li key={brand}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Filter by Color</h3>
            <ul className="space-y-1">
              {['Green', 'Black', 'White', 'Red', 'Orange', 'Brown', 'Gray'].map((color) => (
                <li key={color}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    {color}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 border rounded-full">Reset</button>
          <button className="px-4 py-2 bg-[#037C6A] text-white rounded-full flex items-center gap-2">
            Apply Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                stroke="#ffffff"
                strokeWidth="0.857143"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
