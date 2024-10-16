import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

// images
import newImg from "../../assets/images/new1.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <Container>
      <div className="my-20">
        <Title title="New Arrivals" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="px-4 py-6 bg-white drop-shadow rounded-xl"
            >
              <div className="relative">
                <img src={image.img} alt="new-arrivals" className="mb-5" />
                <span className="absolute top-1.5 right-3 text-xs bg-[#FFCED4] py-1 px-1.5 tracking-widest text-primary font-medium">
                  -{image.sale}
                </span>
              </div>
              <Link>
                <h4 className="leading-6 font-medium text-card-title text-sm md:text-[15px] text-center hover:text-primary transition duration-200">
                  {image.title}
                </h4>
              </Link>
              <div className="flex gap-5 justify-center mt-4">
                <span className="text-sm font-medium text-[#c4c4c4] tracking-wide">
                  <del>{image.oldPrice} TK</del>
                </span>
                <span className="text-sm font-medium text-primary tracking-wide">
                  {image.newPrice} TK
                </span>
              </div>
              <div className="mt-6 w-[80%] mx-auto">
                <button className="text-sm font-semibold text-white py-3 bg-primary rounded-md w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewArrival;

const images = [
  {
    id: 1,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "32%",
    oldPrice: "1,100.00",
    newPrice: "745.00",
  },
  {
    id: 2,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "32%",
    oldPrice: "1,100.00",
    newPrice: "745.00",
  },
  {
    id: 3,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "32%",
    oldPrice: "1,100.00",
    newPrice: "745.00",
  },
  {
    id: 4,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "32%",
    oldPrice: "1,100.00",
    newPrice: "745.00",
  },
];
