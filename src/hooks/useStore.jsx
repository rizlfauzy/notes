import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, selectLocalStorage, saveLocalStorage, editLocalStorage, deleteLocalStorage, resetLocalStorage } from "../helpers/local_storage";

export const itemSlice = createSlice({
  name: "item",
  initialState: {items : getLocalStorage("notes|items")},
  reducers: {
    handle_checked: (state, action) => {
      const id = Number(action.payload);
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
      const item = selectLocalStorage("notes|items", id);
      editLocalStorage(
        "notes|items",
        {
          kode: item.kode,
          ...item,
          checked: !item.checked,
        },
        id
      );
    },
    handle_submit: (state, action) => {
      try {
        state.items.push(action.payload);
        saveLocalStorage(
          "notes|items",
          {
            kode: action.payload.id,
            ...action.payload,
          },
          action.payload.id
        );
      } catch (e) {
        alert(e.message);
      }
    },
    handle_remove: (state, action) => {
      const id = Number(action.payload);
      state.items = state.items.filter((item) => item.id !== id);
      deleteLocalStorage("notes|items", id);
    },
    handle_clear: (state) => {
      state.items = [];
      resetLocalStorage("notes|items");
    },
    order_by: (state, action) => {
      switch (action.payload) {
        case "input":
          state.items = state.items.slice().sort((a, b) => a.id - b.id);
          break;
        case "name":
          state.items = state.items.slice().sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "checked":
          state.items = state.items.slice().sort((a, b) => a.checked - b.checked);
          break;
        default:
          break;
      }
    },
  },
});

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
});


export const { handle_checked, handle_submit, handle_remove, handle_clear, order_by } = itemSlice.actions;