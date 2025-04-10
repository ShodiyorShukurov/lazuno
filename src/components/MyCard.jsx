import { useEffect, useState } from 'react';
import trash from '../assets/logo/trash.svg';

const cartItems = [
  {
    id: 1,
    name: 'Yellow Leather Sofa Chair',
    price: 580,
    oldPrice: 680,
    color: 'Brown',
    quantity: 2,
    image: '/images/yellow-sofa.png',
  },
  {
    id: 2,
    name: 'Green Leather 3 Seater Sofa',
    price: 850,
    oldPrice: 900,
    color: 'Green',
    quantity: 1,
    image: '/images/green-sofa.png',
  },
  {
    id: 3,
    name: 'Round Crystal Lotus Sofa Chair',
    price: 300,
    oldPrice: 340,
    color: 'White',
    quantity: 2,
    image: '/images/white-sofa.png',
  },
];

export default function MyCard() {
  const [items, setItems] = useState(cartItems);
  const [id, setId] = useState();

  useEffect(() => {
    if (id !== null) {
      const filtered = items.filter((item) => item.id !== id);
      setItems(filtered);
    }
  }, [id]);


  return (
    <section className="pt-[120px]">
      <div className="container">
        <h2 className="text-[30px] leading-[120%] text-[#15181E]">My Cart</h2>

        <div className="flex justify-end items-center mt-8 mb-6">
          <button className="w-[56px] h-[56px] bg-[#FEF2F2] rounded-full p-4 cursor-pointer">
            <img src={trash} alt="" />
          </button>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border border-[#E0E4EA] rounded-[24px] p-4 mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-lg"
            />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[18px] leading-[150%] text-[#15181E]">
                    {item.name}
                  </h2>
                  <p className="text-[14px] leading-[140%] text-[#8292AA] mt-1">
                    Color: {item.color}
                  </p>
                </div>
                <button
                  onClick={() => setId(item.id)}
                  className="text-gray-500 hover:text-red-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="text-[14px] leading-[140%] text-[#8292AA] mt-3">
                Quantity: <span>2</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
