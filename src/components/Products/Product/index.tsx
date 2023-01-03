import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { addToCart, removeOneItem } from 'store/cartSlice';

type Categories =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: Categories;
};

const Product = ({ id, title, price, image, category }: ProductType) => {
  const items = useSelector(
    (state: RootState) =>
      state.cart.items.filter((item) => item.item.id === id)[0]
  );
  const dispatch = useDispatch();
  const inCart = items?.count > 0;

  return (
    <div className="h-80 w-48">
      <div
        className="h-44 w-48 bg-contain bg-center bg-no-repeat"
        aria-label={title}
        role="img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className="mt-3 text-lg">{price}$</p>
      <h3
        className="h-12 overflow-hidden text-ellipsis"
        style={{
          WebkitLineClamp: 2,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical'
        }}
      >
        {title}
      </h3>
      <div className="mt-3 flex w-full justify-center">
        {!inCart ? (
          <button
            className="rounded-lg bg-accent p-2 text-white hover:bg-accent/90"
            onClick={() =>
              dispatch(
                addToCart({
                  item: { id, title, price, image, category },
                  count: 1
                })
              )
            }
          >
            Add to cart
          </button>
        ) : (
          <div className="flex w-3/4 flex-row justify-center gap-3">
            <button
              onClick={() =>
                dispatch(
                  removeOneItem({
                    id,
                    title,
                    price,
                    image,
                    category
                  })
                )
              }
              className="text-3xl"
            >
              -
            </button>
            <input
              type="number"
              className="w-8/12 appearance-none text-center"
              value={items.count}
            />
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    item: { id, title, price, image, category },
                    count: 1
                  })
                )
              }
              className="text-3xl"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
