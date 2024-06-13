import { useSelector } from "react-redux";

export default function Footer() {
  const items = useSelector((state) => state.item.items);

  if (!items.length) return <footer className="stats">Tidak ada barang di daftar belanjaan</footer>;

  const checked = items.filter((item) => item.checked).length;
  const percentage = Math.round((Number(checked) / Number(items.length)) * 100);

  return (
    <footer className="stats">
      Ada {items.length} barang di daftar belanjaan, {checked} barang sudah dibeli ({percentage || 0}%)
    </footer>
  );
}