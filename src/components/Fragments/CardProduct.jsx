import Button from "../Elements/Button/Index";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <h5 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h5>
      <p className="text-m text-white">{children}</p>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="g">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {" "}
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button onClick={handleAddToCart}>Daftar</Button>
    </div>
  );
};
// harus di definisikan seperti ini agar komponen body,header, dan footer ikut di eksport dalam CardProduct
CardProduct.Body = Body;
CardProduct.Header = Header;
CardProduct.Footer = Footer;
export default CardProduct;
