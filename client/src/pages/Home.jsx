import FilterMenu from "@/components/custom/FilterMenu";
import Footer from "@/components/custom/Footer";
import HeaderDisplay from "@/components/custom/HeaderDisplay";
import Navbar from "@/components/custom/Navbar";
import ProductList from "@/components/custom/ProductList";

function Home() {
  return (
    <>
      <HeaderDisplay />
      <FilterMenu />
      <ProductList />
    </>
  );
}

export default Home;
