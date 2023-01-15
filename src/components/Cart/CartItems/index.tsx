import { useState } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from 'store';

import CartItem from '../CartItem';

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [chosenItems, setChosenItems] = useState(
    cartItems.map((cartItem) => cartItem.item.id)
  );

  return (
    <div className="w-full sm:w-8/12">
      <div role="toolbar" className="my-6 flex gap-x-8 border-b pb-3">
        <div>
          <input
            type="checkbox"
            name="chooseAll"
            className="h-4 w-4"
            checked={(() => {
              const sortedChosen = chosenItems.sort();

              return (
                cartItems.length === chosenItems.length &&
                cartItems
                  .sort()
                  .every(
                    (val, index) => val.item.id === sortedChosen.sort()[index]
                  )
              );
            })()}
            onChange={(e) => {
              console.log(e.target.checked);
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

        <span role="button" className="text-red-600">
          Delete chosen
        </span>
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
