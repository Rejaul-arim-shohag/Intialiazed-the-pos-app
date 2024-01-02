import "./Product.css";

const Products = ({ result }) => {
  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-items-center justify-center gap-y-2 gap-x-2 mt-10 mb-5">{result}</section>
    </>
  );
};

export default Products;
