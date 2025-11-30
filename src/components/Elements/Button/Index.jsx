import { Children } from "react";
const Button = (props) => {
  //pecah dulu menggunakan destructuring
  //sama dengan ini adalah nilai default
  const {
    varian = "bg-blue-400",
    children,
    onClick,
    type,
    clasname = `h-10 px-6 rounded-md font-semibold ${varian} text-white`,
  } = props;
  return (
    <div>
      {/* ini cara untuk memanipulasi classname HTMLnya dengan`` */}
      <button className={clasname} type={type} onClick={onClick}>
        {
          //ini untuk mengambil yang ada di dalam tag komponen menggunakan childern
          children
        }
      </button>
    </div>
  );
};

export default Button;
