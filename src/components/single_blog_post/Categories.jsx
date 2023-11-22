import React from "react";
import { Link } from "react-router-dom";
function Category({ categories }) {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Categories</h3>
      <ul className="categories">
        {categories?.map((category) => {
          return (
            <li key={category?._id}>
              <Link to={`/category/wise/blog/${category?._id}`}>
                {category?.categoryName} <span>({category?.blogs?.length})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
