import CardProduct from "../components/Fragments/CardProduct";
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/si-surga.png"></CardProduct.Header>
        <CardProduct.Body title="Si Surga">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.
        </CardProduct.Body>
        {/* cara menggunakannya dengan dot */}
        <CardProduct.Footer price="Rp. 25.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/si-surga.png"></CardProduct.Header>
        <CardProduct.Body title="Si Surga">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 25.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};
export default ProductsPage;
