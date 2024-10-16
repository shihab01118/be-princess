// components
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

// images
import brand1 from "@/assets/images/brand1.png";
import brand2 from "@/assets/images/brand2.png";
import brand3 from "@/assets/images/brand3.png";
import brand4 from "@/assets/images/brand4.png";
import brand5 from "@/assets/images/brand5.png";
import brand6 from "@/assets/images/brand6.png";

const TrendingBrands = () => {
  return (
    <Container>
      <div className="my-20">
        <Title title="Trending Brands" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, idx) => (
            <div key={idx}>
              <img src={brand} alt="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrendingBrands;

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
