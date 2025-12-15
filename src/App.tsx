import { FaHamburger } from "react-icons/fa";
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import TipPercentageForm from "./components/TipPercentageForm";
import OrderTotals from "./components/OrderTotals";

function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder();

  return (
    <>
      <header className="relative bg-orange-600 bg-[url('/img/header.png')] bg-center py-10">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
        <h1 className="flex justify-center gap-4 relative z-10 text-center text-6xl font-black text-yellow-400 font-poetsen">
          <FaHamburger />
          Monster Burger - Orders
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black font-poetsen">Menu</h2>
          <div className="space-y-2 mt-10">
            {menuItems.map( item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {order.length ? (
              <>
                <OrderContents 
                  order={order}
                  removeItem={removeItem}
                />
                <TipPercentageForm 
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals 
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="text-center italic text-xl text-slate-400 font-varela pt-5">Empty Order</p>
            )}
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
