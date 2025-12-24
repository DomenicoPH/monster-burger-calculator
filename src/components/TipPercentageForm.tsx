import type { ActionDispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
    dispatch: ActionDispatch<[action: OrderActions]>;
    tip: number;
}

export default function TipPercentageForm({tip, dispatch} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl font-poetsen pb-2">Tip:</h3>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2 font-varela">
                    <input
                        id={tipOption.id} 
                        type="radio"
                        name='tip'
                        value={tipOption.value}
                        onChange={e => dispatch({ type: 'add-tip', payload: {value: +e.target.value} })}
                        checked={tipOption.value === tip}
                    />
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                </div>
            ))}
        </form>
    </div>
  )
}
