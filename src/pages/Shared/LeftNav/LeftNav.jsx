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
    <div className="text-left">
      <h4 className="mb-3">All Category</h4>
      <div className="d-flex flex-column">
        {categories.map((category) => (
          <ActiveLink key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
