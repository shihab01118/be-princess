import { useEffect, useRef, useState } from "react";

// icons
import { TbCategoryPlus } from "react-icons/tb";
import { FaAngleUp, FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { categories } from "./categories";


const CategoryButton = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
      <div ref={dropDownRef} className="relative w-fit">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-primary px-4 py-3 flex items-center font-medium gap-12 text-white"
        >
          <div className="flex items-center">
            <TbCategoryPlus className="text-2xl mr-3" />
            <span>Categories</span>
          </div>
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        <ul
          className={`${
            open
              ? "visible translate-y-0 duration-300"
              : "invisible translate-y-4 duration-150"
          } absolute top-12 z-50 w-full space-y-1 rounded-b-sm bg-white shadow-md`}
        >
          {categories.map((category, idx) => (
            <li
              key={idx}
              className={`rounded-sm mx-4 py-3 text-[#555] text-sm ${
                open ? "opacity-100 duration-200" : "opacity-0 duration-200"
              } hover:text-primary  cursor-pointer flex justify-between items-center border-b border-gray-200 ${
                idx === categories?.length - 1 ? "border-none" : ""
              }`}
            >
              <span>{category?.name}</span>
              {(category?.items?.length > 0 ||
                category?.subCategory?.length > 0) && <FaAngleRight />}
            </li>
          ))}
        </ul>
      </div>
  );
};


export default CategoryButton;

