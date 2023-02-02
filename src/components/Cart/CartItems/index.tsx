import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { changeCount } from 'store/cartSlice';

import CartItem from './CartItem';

const CartItems = ({
  chosenItems,
  setChosenItems
}: {
  chosenItems: number[];
  setChosenItems: (value: number[]) => void;
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div role="toolbar" className="my-6 flex gap-x-8 border-b pb-3">
        <div>
          <input
            type="checkbox"
            name="chooseAll"
            className="h-4 w-4"
            checked={(() => {
              const sortedChosen = [...chosenItems].sort();
              const sortedCart = [
                ...cartItems.map((cartItem) => cartItem.item.id)
              ].sort();

              return (
                cartItems.length === chosenItems.length &&
                sortedCart.every((val, index) => val === sortedChosen[index])
              );
            })()}
            onChange={(e) => {
              if (!e.target.checked) {
                setChosenItems([]);
              } else {
                setChosenItems(cartItems.map((cartItem) => cartItem.item.id));
              }
            }}
          />
          <label htmlFor="chooseAll" className="ml-3">
            Choose all
          </label>
        </div>

        {chosenItems.length ? (
          <span
            role="button"
            className="text-red-600"
            onClick={() =>
              chosenItems.forEach((chosenItem) => {
                setChosenItems([
                  ...chosenItems.filter((id) => id !== chosenItem)
                ]);
                dispatch(changeCount({ id: chosenItem, count: 0 }));
              })
            }
          >
            Delete chosen
          </span>
        ) : undefined}
      </div>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.item.id}
          id={cartItem.item.id}
          title={cartItem.item.title}
          price={cartItem.item.price}
          image={cartItem.item.image}
          category={cartItem.item.category}
          count={cartItem.count}
          selectChosen={(id: number) => setChosenItems([...chosenItems, id])}
          unselectChosen={(id: number) =>
            setChosenItems(chosenItems.filter((item) => item !== id))
          }
          chosen={chosenItems.includes(cartItem.item.id)}
        />
      ))}
    </div>
  );
};

export default CartItems;
