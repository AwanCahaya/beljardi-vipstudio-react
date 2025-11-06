import Button from "../Elements/Button";
const CardProduct = () => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow">
      <a href="g">
        <img
          src="/images/si-surga.png"
          alt="product"
          className="p-8 rounded-t-lg"
        />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          Si Surga
        </h5>
        <p className="text-m text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.
        </p>
      </div>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">Rp. 25.000</span>
        <Button>Daftar</Button>
      </div>
    </div>
  );
};

export default CardProduct;
