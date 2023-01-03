import { useGetProductsQuery } from 'store/api';

import Product from './Product';

const Products = () => {
  const { data } = useGetProductsQuery();

  if (!data) {
    return <>Loading</>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-x-24 gap-y-3 p-12">
      {data.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default Products;
