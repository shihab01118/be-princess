// components
import Container from "@/components/ui/Container";

// images
import bannerImg from "../../assets/images/home-banner.jpeg";

const Banner = () => {
  return (
    <section>
      <Container>
        <img
          src={bannerImg}
          alt="banner"
          className="w-full object-cover rounded-lg h-[350px]"
        />
      </Container>
    </section>
  );
};

export default Banner;
