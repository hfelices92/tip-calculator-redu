import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types/types";
import { OrderActions } from "../reducers/order-reducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>
};

export default function OrderContents({
  dispatch,
  order,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b "
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>

              <p className="font-black">
                {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              onClick={() => dispatch({type:"remove-item", payload:{item:item.id}})}
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
