import Banner from "@/components/home/Banner";
import BestSelling from "@/components/home/BestSelling";
import MoreCategories from "@/components/home/MoreCategories";
import NewArrival from "@/components/home/NewArrival";
import ShopByConcern from "@/components/home/ShopByConcern";
import TopCategories from "@/components/home/TopCategories";
import TrendingBrands from "@/components/home/TrendingBrands";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByConcern />
      <NewArrival />
      <TrendingBrands />
      <TopCategories />
      <BestSelling />
      <MoreCategories />
    </div>
  );
};

export default Home;
