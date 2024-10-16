import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

// // images
import img1 from "../../assets/images/t1.png";
import img2 from "../../assets/images/t2.png";
import img3 from "../../assets/images/t3.png";
import img4 from "../../assets/images/t4.png";

const TopCategories = () => {
  return (
    <Container>
      <div className="my-20">
        <Title title="Top Categories" />
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

export default TopCategories;
