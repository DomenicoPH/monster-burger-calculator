import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem['id']) => void;
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl font-poetsen">Order Summary</h2>
        <div className="space-y-2 mt-10">
            {order.map(item => (
                <div 
                    key={item.id}
                    className="flex justify-between items-center border-b-2 border-slate-200 pb-2"
                >
                    <div className="flex items-center gap-4">
                        <img className="h-15 rounded-lg" src={`/img/${item.image}.png`} alt={item.name} />
                        <div>
                            <p className="font-varela text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-varela font-black">
                                Catidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                    </div>

                    <button
                        className="bg-red-500 h-8 w-8 rounded-full text-white font-black"
                        onClick={() => removeItem(item.id)}
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
