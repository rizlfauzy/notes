import { handle_submit } from "../hooks/useStore";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

export default function Form() {
  const [barang, setBarang] = useState("");
  const [qty, setQty] = useState(1);

  const option_content = [...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>);
  const dispatch = useDispatch();
  const on_submit = useCallback(function (e) {
    e.preventDefault();
    try {
      if (barang === "") throw new Error("Nama barang tidak boleh kosong");
      dispatch(handle_submit({ id: Date.now(), name: barang, checked: false, qty }));
      setBarang("");
      setQty(1);
    } catch (e) {
      alert(e.message);
    }
  }, [dispatch, barang, qty]);

  return (
    <form className="add-form" onSubmit={on_submit.bind(this)}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select name="qty" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
          {option_content}
        </select>
        <input id="input_barang" name="barang" type="text" placeholder="nama barang..." value={barang} onChange={(e) => setBarang(e.target.value)} />
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
}