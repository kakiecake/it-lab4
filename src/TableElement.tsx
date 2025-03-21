import { Order } from "./types";

type Props = {
  order: Order;
  rename: () => void;
  delete: () => void;
  close: () => void;
  edit: () => void;
}

const TableElement = (props: Props) => {
  const order = props.order;
  return <tr>
    <td>{order.id}</td>
    <td>{order.cardNumber}</td>
    <td>{order.order}</td>
    <td>{order.total}</td>
    <td>{order.client}</td>
    <td>{order.time}</td>
    <td>{order.comment || '-'}</td>
    <td>
      <button onClick={props.rename}>Переименовать</button>
      <button onClick={props.delete}>Удалить</button>
      <button onClick={props.close}>Закрыть</button>
      <button onClick={props.edit}>Изменить</button>
    </td>
  </tr>
}

export default TableElement;
