import { configureStore, createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
  },
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
    },
    handle_submit: (state, action) => {
      try {
        state.items.push(action.payload);
      } catch (e) {
        alert(e.message);
      }
    },
    handle_remove: (state, action) => {
      const id = Number(action.payload);
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
});


export const { handle_checked, handle_submit, handle_remove } = itemSlice.actions;