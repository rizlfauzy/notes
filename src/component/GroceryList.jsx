import { useSelector, useDispatch } from "react-redux";
import { handle_clear, order_by } from "../hooks/useStore";
import { useCallback } from "react";
import Item from "./Item";

export default function GroceryList() {
  const items = useSelector((state) => state.item.items);
  const dispatch = useDispatch();

  const on_click = useCallback(function () {
    const conf = confirm("Apakah anda yakin ingin menghapus semua item?");
    if (!conf) return;
    dispatch(handle_clear());
  }, [dispatch]);

  const on_change = useCallback(function (e) {
    dispatch(order_by(e.target.value));
  }, [dispatch]);

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
        <select onChange={on_change.bind(this)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button type="button" onClick={on_click.bind(this)}>Bersihkan Daftar</button>
      </div>
    </>
  );
}