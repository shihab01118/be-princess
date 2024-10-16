import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

// images
import newImg from "../../assets/images/new1.png";

const NewArrival = () => {
  return (
    <Container>
      <div className="my-20">
        <Title title="New Arrivals" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (<div key={image.id} className="p-5 bg-white shadow rounded-lg">
            
        </div>))}
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
    sale: "-32%", 
    oldPrice: 1100.00,
    newPrice: 745.00
  },
  {
    id: 2,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "-32%", 
    oldPrice: 1100.00,
    newPrice: 745.00
  },
  {
    id: 3,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "-32%", 
    oldPrice: 1100.00,
    newPrice: 745.00
  },
  {
    id: 4,
    img: newImg,
    title: "Sheglam Color Bloom Liquid Blush Matte Finish - Cutie Pie",
    sale: "-32%", 
    oldPrice: 1100.00,
    newPrice: 745.00
  },
];
