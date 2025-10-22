import React, { use } from 'react'
import { NavLink } from 'react-router';

const categoryPromise = fetch("../categories.json").then(res => res.json());
function Categoris() {
    const categories = use(categoryPromise)

  return (
    <>
      <div className="font-bold">All Categoryis {categories.length}</div>
      <div className="grid grid-cols-1 gap-4 mt-3">
        {categories.map((category) => (
          <NavLink
            className={"btn bg-base-100 hover:bg-base-200 transition font-semibold text-accent"}
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Categoris