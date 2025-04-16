import React, { use, useEffect, useState } from "react";
import Category2 from "./Category2";
import { Category } from "@interfaces/common";
import axios from "axios";

const Categories2: React.FC = () => {
  const [selected, setSelected] = useState("All");
  const handleSelected = (name: string) => {
    setSelected(name);
  };
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  useEffect(() => {
    axios
      .get("/data/category.json")
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul className="categories">
      {categoryList &&
        categoryList.map((category) => (
          <li>
            <Category2
              category={category}
              style={
                category.name === selected
                  ? "category category--selected"
                  : "category"
              }
              click={handleSelected}
            />
          </li>
        ))}
    </ul>
  );
};

export default Categories2;
