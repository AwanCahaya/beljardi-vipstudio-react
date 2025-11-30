import { useEffect } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import { useState } from "react";
const ProductsPage = () => {
  const products = [
    {
      id: 1,
      image: "/images/si-surga.png",
      title: "Si Surga",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: 100000,
    },
    {
      id: 2,
      image: "/images/si-wali.png",
      title: "Si Wali",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: 150000,
    },
    {
      id: 3,
      image: "/images/si-pena.png",
      title: "Si Pena",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: 50000,
    },
    {
      id: 4,
      image: "/images/si-ikhram.png",
      title: "Si Ikhram",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: 125000,
    },
    {
      id: 5,
      image: "/images/si-kubah.png",
      title: "Si Kubah",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: 200000,
    },
    {
      id: 6,
      image: "/images/si-fitri.png",
      title: "Si Fitri",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: 1500000,
    },
  ];
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const [total, setTotal] = useState(0);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((arr, curr) => arr + curr.qty * curr.price, 0);
      setTotal(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  const handleAddToCart = (product) => {
    const newCart = cart.find((item) => item.id === product.id);

    if (newCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          image: product.image,
          title: product.title,
          qty: 1,
          price: product.price,
        },
      ]);
    }
  };
  console.log(cart);
  return (
    <>
      <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10">
        {email}
        <Button varian="ml-5 bg-black" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}></CardProduct.Header>
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                {/* cara menggunakannya dengan dot */}
                <CardProduct.Footer
                  price={product.price}
                  handleAddToCart={() => handleAddToCart(product)}
                ></CardProduct.Footer>
              </CardProduct>
            );
          })}
        </div>

        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">
            Cart :{" "}
            {total.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </h1>
          <ul>
            {cart.map((item) => {
              return (
                <div key={item.id} className="flex bg-blue-200 rounded p-1 m-2">
                  <img src={item.image} alt="gambar" className="h-15" />

                  <ul className="w-full">
                    <li className="font-bold text-blue-600 text-xl">
                      {item.title}
                    </li>
                    <li>
                      {item.qty} x{" "}
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </li>
                  </ul>
                  <div className="w-full flex justify-center items-center font-bold text-xl ">
                    {" : "}
                    {(item.qty * item.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
