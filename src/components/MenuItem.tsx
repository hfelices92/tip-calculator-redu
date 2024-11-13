import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types/types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: React.Dispatch<OrderActions>
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      onClick={()=>dispatch({ type: "add-item", payload: { item:item } })}
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-400"
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}€</p>
    </button>
  );
}
