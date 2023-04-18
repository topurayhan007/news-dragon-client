import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(categories);

  return (
    <div className="text-center mt-4">
      <h4 className="mb-3">All Category</h4>
      <div className="">
        {categories.map((category) => (
          <p key={category.id} className="py-2 my-1">
            {" "}
            <ActiveLink to={`/category/${category.id}`} className="w-100">
              {category.name}
            </ActiveLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
