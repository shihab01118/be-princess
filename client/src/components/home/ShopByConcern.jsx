import Container from "@/components/ui/Container";
import Title from "../ui/Title";

// images
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

const ShopByConcern = () => {
  return (
    <Container>
      <div className="my-20">
        <Title title="Shop By Concern" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <img src={img1} alt="img" />
          </div>
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
          <div>
            <img src={img4} alt="img" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShopByConcern;
