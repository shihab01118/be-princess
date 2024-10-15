// components
import Container from "@/components/ui/Container";
import CategoryButton from "./CategoryButton";
import { categories } from "./categories";

// icons
import { FaAngleDown } from "react-icons/fa6";

const NavbarBottom = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <CategoryButton />
          {/* nav items */}
          <ul className="flex gap-6">
            {categories?.map((category, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-[#555] border-2 border-transparent hover:border-b-primary py-2.5 transition-all duration-200 cursor-pointer group"
              >
                <span>{category?.name}</span>
                {(category?.items?.length > 0 ||
                  category?.subCategory?.length > 0) && (
                  <FaAngleDown className="text-sm group-hover:rotate-180 transition duration-300" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavbarBottom;
