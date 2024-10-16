// components
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

// images
import mc1 from "@/assets/images/mc1.png";
import mc2 from "@/assets/images/mc2.png";
import mc3 from "@/assets/images/mc3.png";
import mc4 from "@/assets/images/mc4.png";
import mc5 from "@/assets/images/mc5.png";
import mc6 from "@/assets/images/mc6.png";

const MoreCategories = () => {
  return (
    <Container>
      <div className="my-20">
        <Title title="Explore More Categories" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {moreCategories.map((category, idx) => (
            <div key={idx} className="group cursor-pointer">
              <img src={category.img} alt="img" />
              <h4 className="text-card-title text-lg font-semibold group-hover:text-primary mt-3 text-center">
                {category.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MoreCategories;

const moreCategories = [
  { img: mc1, name: "Skincare" },
  { img: mc2, name: "Makeup" },
  { img: mc3, name: "Lipstick" },
  { img: mc4, name: "Perfume" },
  { img: mc5, name: "Hair" },
  { img: mc6, name: "Mom & Baby" },
];
