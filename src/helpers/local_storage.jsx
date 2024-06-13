export function getLocalStorage(name_storage) {
  return JSON.parse(localStorage.getItem(name_storage)) || [];
}

export function selectLocalStorage(name_storage, kode) {
  const items = getLocalStorage(name_storage);
  const is_have = items.filter((item) => item.kode === kode);
  if (is_have.length > 0) return is_have[0];
  return null;
}

export function saveLocalStorage(name_storage, item, id) {
  const items = getLocalStorage(name_storage);
  const is_have = items.filter((item) => item.kode === id);
  if (is_have.length > 0) return;
  items.push(item);
  localStorage.setItem(name_storage, JSON.stringify(items));
}

export function editLocalStorage(name_storage, item, id) {
  const items = getLocalStorage(name_storage);
  const delete_items = items.filter((item) => item.kode !== id);
  delete_items.push(item);
  localStorage.setItem(name_storage, JSON.stringify(delete_items));
}

export function deleteLocalStorage(name_storage, id) {
  const items = getLocalStorage(name_storage);
  const delete_items = items.filter((item) => item.kode !== id);
  localStorage.setItem(name_storage, JSON.stringify(delete_items));
}

export function resetLocalStorage(name_storage) {
  localStorage.setItem(name_storage, JSON.stringify([]));
}
