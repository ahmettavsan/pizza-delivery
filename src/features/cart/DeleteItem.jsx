import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteCartItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button onClick={handleDeleteCartItem} type="small">
      Delete
    </Button>
  );
}
