import { Link } from "react-router-dom";

// components
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

// images
import img1 from "@/assets/images/b1.png";
import img2 from "@/assets/images/b2.png";
import img3 from "@/assets/images/b3.jpg";
import img4 from "@/assets/images/b4.png";


const BestSelling = () => {
    return (
        <Container>
        <div className="my-20">
        <Title title="Best Selling" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="px-4 py-6 bg-white drop-shadow rounded-xl"
            >
              <div className="relative">
                <img src={product.img} alt="new-arrivals" className="mb-5 rounded-xl" />
                <span className="absolute top-1.5 right-3 text-xs bg-[#FFCED4] py-[2px] px-2 tracking-[2px] text-[#E30C64] font-medium">
                  -{product.sale}
                </span>
              </div>
              <Link>
                <h4 className="leading-6 font-medium text-card-title text-sm md:text-[15px] text-center hover:text-primary transition duration-200">
                  {product.title}
                </h4>
              </Link>
              <div className="flex gap-5 justify-center mt-4">
                <span className="text-sm font-medium text-[#c4c4c4] tracking-wide">
                  <del>{product.oldPrice} TK</del>
                </span>
                <span className="text-sm font-medium text-primary tracking-wide">
                  {product.newPrice} TK
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

export default BestSelling;

const products = [
    {
      id: 1,
      img: img1,
      title: "AXIS-Y Dark Spot Correcting Glow Serum - 5ml",
      sale: "64%",
      oldPrice: "500.00",
      newPrice: "199.00",
    },
    {
      id: 2,
      img: img2,
      title: "Cosrx Salicylic Acid Daily Gentle Cleanser - 150 ml",
      sale: "14%",
      oldPrice: "11,050.00",
      newPrice: "899.00",
    },
    {
      id: 3,
      img: img3,
      title: "AXIS-Y Dark Spot Correcting Glow Serum - 50ml",
      sale: "39%",
      oldPrice: "1,800.00",
      newPrice: "1,099.00",
    },
    {
      id: 4,
      img: img4,
      title: "The Ordinary Niacinamide 10%+Zinc 1% - 30ml",
      sale: "36%",
      oldPrice: "1,650.00",
      newPrice: "1,050.00",
    },
  ];