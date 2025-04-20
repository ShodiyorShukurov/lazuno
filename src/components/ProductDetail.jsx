import React from 'react';
import eye from '../assets/logo/eye.svg';
import minus from '../assets/logo/minus.svg';
import plus from '../assets/logo/plus.svg';
import right from '../assets/logo/direction-right 2.svg';
import BuyModal from './BuyModal';
import BuySuccessModal from './BuySuccessModal';
import fast from '../assets/logo/fast delivery.svg';
import medal from '../assets/logo/medal.svg';
import reload from '../assets/logo/reload.svg';
import { useTranslation } from 'react-i18next';

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
      fill="#037C6A"
    />
  </svg>
);

const ProductDetail = ({ productDetailData, setAddProduct }) => {
  const { t } = useTranslation();

  const items = [
    { id: 1, title: t('product_detail.free'), img: fast },
    { id: 2, title: t('product_detail.certified'), img: medal },
    { id: 3, title: t('product_detail.lifetime'), img: reload },
  ];

  const [count, setCount] = React.useState(0);
  const [buyModalSend, setBuyModalSend] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [successBuy, setSuccessBuy] = React.useState(false);
  const [isCartEmpty, setIsCartEmpty] = React.useState(
    !(
      localStorage.getItem('cartItems') &&
      JSON.parse(localStorage.getItem('cartItems')).length > 0
    )
  );

  const checkCart = () => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setIsCartEmpty(items.length === 0);
  };

  const saveItem = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItems.push(item);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setAddProduct(cartItems);
    setCount(0);
    checkCart();
  };

  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = productDetailData?.data?.image_url || [];
  const displayedImages = isMobile ? images.slice(0, 2) : images;

  return (
    <section className="pt-[120px]">
      <div className="container">
        <h5 className="flex  text-[14px] leading-[140%] text-[#15181E] font-[ClashDisplay-Regular]">
          {t('product_detail.home')} <img src={right} alt="right" />{' '}
          {t('product_detail.product')} <img src={right} alt="right" />{' '}
          {productDetailData?.data?.title}
        </h5>
        <div className="grid md:grid-cols-2 gap-[64px] pt-6">
          <div>
            <div className="relative rounded-[16px] md:rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-[#F1F3F6] z-[1]"></div>
              <img
                src={productDetailData?.data?.image_url[0]}
                alt={productDetailData?.data?.image_name[0]}
                className="w-full h-[350px] md:h-[500px] object-cover z-[2] relative "
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {displayedImages?.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt={item}
                  className="w-full rounded-[16px] md:rounded-[32px] object-cover h-[160px] sm:h-[215px]"
                />
              ))}
            </div>
          </div>

          {/* Right side - details */}
          <div className="flex flex-col justify-between w-full md:max-w-[560px]">
            <div>
              <div className="flex items-center gap-[2px]">
                <span className="flex items-center gap-[2px]">
                  {[...Array(productDetailData?.data?.averageRating)].map(
                    (_, index) => (
                      <Star key={index} />
                    )
                  )}
                </span>
                <span className="text-[16px] leading-[150%] text-[#15181E] font-[ClashDisplay-Regular]">
                  {productDetailData?.data?.averageRating} (
                  {productDetailData?.data?.reviews_count}{' '}
                  {t('product_detail.review')})
                </span>
              </div>
              <h1 className="text-[36px] md:text-[48px] leading-[126%] text-[#15181E] mt-4 pb-4 border-b border-[#E0E4EA]">
                {productDetailData?.data?.title}
              </h1>

              <div className="pt-6 flex items-center gap-2">
                <img src={eye} alt="eye" width={24} height={24} />
                <p className="text-[16px] leading-[150%] text-[#15181E] ">
                  {productDetailData?.data?.views} {t('product_detail.see')}
                </p>
              </div>
              <p className="text-[#384252] text-[14px] leading-[140%] mt-4">
                {t('product_detail.text')}
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-4 text-[#15181E] border border-[#E0E4EA] rounded-full p-4">
                  <button
                    className="min-w-[24px] min-h-[24px] cursor-pointer"
                    disabled={count == 0}
                    onClick={() => setCount(count - 1)}
                  >
                    <img src={minus} alt="minus" width={24} height={24} />
                  </button>
                  {count}
                  <button
                    className="min-w-[24px] min-h-[24px] cursor-pointer"
                    disabled={count == 10}
                    onClick={() => setCount(count + 1)}
                  >
                    <img src={plus} alt="plus" width={24} height={24} />
                  </button>
                </div>

                <button
                  disabled={count > 0 ? false : true}
                  className="w-full pl-[24px] p-[3px] flex items-center justify-between bg-[#037C6A] rounded-[48px] text-[16px] text-[#ffffff] leading-[150%] font-[ClashDisplay-Regular] text-center cursor-pointer"
                  onClick={() =>
                    saveItem({
                      id: productDetailData?.data?.id,
                      name: productDetailData?.data?.title,
                      color: productDetailData?.data?.color,
                      url:
                        window.origin +
                        '/product/' +
                        productDetailData?.data?.id,
                      img: productDetailData?.data?.image_url[0],
                      quantity: count,
                    })
                  }
                >
                  <span className="mx-auto">{t('product_detail.add')}</span>
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

              <button
                disabled={count > 0 ? false : true}
                className="w-full pl-[24px] p-[3px] flex items-center justify-between bg-transparent border border-[#E0E4EA] rounded-[48px] text-[16px] text-[#15181E] leading-[150%] font-[ClashDisplay-Regular] text-center cursor-pointer mt-[16px]"
                onClick={() => {
                  setIsModalOpen(true);
                  saveItem({
                    id: productDetailData?.data?.id,
                    name: productDetailData?.data?.title,
                    color: productDetailData?.data?.color,
                    url:
                      window.origin + '/product/' + productDetailData?.data?.id,
                    img: productDetailData?.data?.image_url[0],
                    quantity: count,
                  });
                  console.log("daaa")
                }}
              >
                <span className="mx-auto">{t('product_detail.buy')}</span>
                <span className="bg-[#037C6A] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M12.714 7.57141L16.1426 11M16.1426 11L12.714 14.4286M16.1426 11L5.85686 11"
                      stroke="#fff"
                      strokeWidth="0.857143"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <ul className="mt-[32px] flex items-center justify-center sm:justify-start gap-6 flex-col sm:flex-row md:flex-wrap lg:flex-nowrap">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className={`p-4 w-full sm:w-auto flex justify-center flex-col  items-center sm:items-baseline ${
                      item.id == 2
                        ? 'border-y sm:border-y-0 sm:border-x border-[#E0E4EA] '
                        : ''
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="fast"
                      className="w-[32px] h-[32px]"
                    />
                    <p className="text-[#15181E] text-[16px] leading-[150%] font-[ClashDisplay-Regular] mt-[16px]">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BuyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setSuccessBuy={setSuccessBuy}
      />
      <BuySuccessModal
        successBuy={successBuy}
        onClose={() => setSuccessBuy(false)}
      />
    </section>
  );
};

export default ProductDetail;
