import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "First Book",
    description: "Really nice story 1",
  },
  {
    id: "p2",
    price: 3,
    title: "Second Book",
    description: "Cheap story 2",
  },
  {
    id: "p3",
    price: 9,
    title: "Third Book",
    description: "Expensive story 3",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
