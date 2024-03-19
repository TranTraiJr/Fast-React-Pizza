import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { delItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(delItem(pizzaId))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
