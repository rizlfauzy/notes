export default function Note() {
  
  return (
    <>
      <div className="app">
        <h1>Catatan Belanjaku 📝</h1>
        <form className="add-form">
          <h3>Hari ini belanja apa kita?</h3>
          <div>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="text" placeholder="nama barang..." />
          </div>
          <button type="button">Tambah</button>
        </form>
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" defaultChecked={true} />
              <span style={{ textDecoration: "line-through" }}>1 Kopi</span>
              <button>&times;</button>
            </li>
            <li>
              <input type="checkbox" />
              <span>5 Gula Pasir</span>
              <button>&times;</button>
            </li>
            <li>
              <input type="checkbox" />
              <span>3 Air Mineral</span>
              <button>&times;</button>
            </li>
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
      </div>
    </>
  );
}