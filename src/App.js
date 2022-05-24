import "./App.css";
import Header from "./components/Header";
import ItemMain from "./components/ItemMain";
import Footer from "./components/Footer";
import About from "./components/About";
import TeamBuy from "./components/TeamBuy";
import RelatedProduct from "./components/RelatedProduct";
import ProductDetails from "./components/ProductDetails";
import ProductReview from "./components/ProductReview";
import RecommendedProducts from "./components/RecomendedProducts";

function App() {
  return (
    <>
      <Header />

      <ItemMain />
      <TeamBuy />
      <RelatedProduct />
      <ProductDetails />
      <ProductReview />
      <RecommendedProducts />
      <About />

      <Footer />
    </>
  );
}

export default App;
