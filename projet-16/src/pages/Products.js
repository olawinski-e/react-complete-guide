import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section>
      <h1>
        Products :<span>&#41;</span>
      </h1>
      <ul>
        <li>
          <Link to="products/p1">A Book</Link>
        </li>
        <li>
          <Link to="products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="products/p3">A Course 3</Link>
        </li>
      </ul>
    </section>
  );
};
