import { useSelector } from "react-redux";
import Item from "./Item";

export default function GroceryList() {
  const items = useSelector((state) => state.item.items);
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}