import Banner from "@/components/home/Banner";
import NewArrival from "@/components/home/NewArrival";
import ShopByConcern from "@/components/home/ShopByConcern";
import TopCategories from "@/components/home/TopCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByConcern />
      <NewArrival />
      <TopCategories />
    </div>
  );
};

export default Home;
