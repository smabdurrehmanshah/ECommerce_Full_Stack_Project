import ProductCard from "./ProductCard";

function ProductList () {
  return <div className="w-[90vw] grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto my-10 gap-5 place-content-center">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
}

export default ProductList;