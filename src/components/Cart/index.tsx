import { useSelector } from 'react-redux';

import { RootState } from 'store';

import CartItems from './CartItems';

const Cart = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((count, item) => count + item.count, 0)
  );

  return (
    <div className="w-11/12">
      <p className="text-4xl font-bold">{`Cart${
        cartCount ? '' : ' is empty'
      }`}</p>
      {cartCount === 0 && (
        <p className="mt-3 text-xl">
          Try using the search bar if you can`t find the items you are looking
          for!
        </p>
      )}
      {cartCount > 0 && <CartItems />}
    </div>
  );
};

export default Cart;
