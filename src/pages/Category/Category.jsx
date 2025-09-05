import React from "react";
import { useLocation } from "react-router-dom";

const Category = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>Category</h1>
      <div>{query.get("cat")}</div>
    </div>
  );
};

export default Category;
