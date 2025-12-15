import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem;
    addItem: (item : MenuItem) => void;
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
        className="flex justify-between items-center w-full p-2 border-2 border-orange-50 hover:bg-orange-50 cursor-pointer rounded-lg text-slate-800 font-poetsen"
        onClick={() => addItem(item)}
    >
            <img className="max-h-25 rounded-lg" src={`/img/${item.image}.png`} alt={item.name} />
            <p className="font-black text-2xl">{item.name}</p>
            <p className="font-black bg-yellow-500 p-5 m-2 rounded-full text-xl mr-">${item.price}</p>

    </button>
  )
}
