import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { handle_checked, handle_remove } from "../hooks/useStore";
import { useCallback } from "react";

export default function Item({ item }) {
  const dispatch = useDispatch();

  const handle_click = useCallback(function (e) {
    e.preventDefault();
    try {
      const conf = confirm("Are you sure you want to remove this item?");
      if (!conf) return;
      dispatch(handle_remove(e.target.parentElement.id));
    } catch (e) {
      alert(e.message);
    }
  }, [dispatch]);

  return (
    <li id={item.id} key={item.id}>
      <input type="checkbox" onChange={(e) => dispatch(handle_checked(e.target.parentElement.id))} defaultChecked={item.checked} />
      <span style={{ textDecoration: item.checked ? "line-through" : "none" }}>
        {item.qty} {item.name}
      </span>
      <button type="button" onClick={handle_click.bind(this)}>&times;</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};
