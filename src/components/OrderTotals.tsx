import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { ActionDispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    dispatch: ActionDispatch<[action: OrderActions]>
}

export default function OrderTotals({
    order,
    tip,
    dispatch
} : OrderTotalsProps) {

    const subTotalAmount = useMemo(
        () => order.reduce((total, item) => total + (item.quantity * item.price), 0),
        [order]
    );

    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

    return (
      <>
          <div className="space-y-3">
              <h2 className="font-black text-2xl font-poetsen">Total:</h2>

              <p className="font-varela">
                Subtotal: {""}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
              </p>

              <p className="font-varela">
                Tip: {""}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
              </p>

              <p className="font-varela">
                Total: {""}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
              </p>

              <button 
                className="w-full bg-black p-3 uppercase text-white font-bold text-xl mt-10 cursor-pointer disabled:opacity-10 disabled:cursor-auto font-poetsen rounded-lg hover:bg-slate-800"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: 'place-order' })}
              >
                Place Order
              </button>
          </div>
      </>
    )
}
