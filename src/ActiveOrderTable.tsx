import TableElement from "./TableElement"
import { Order } from "./types"

type Props = {
    orders: Order[]
    actions: {
        renameOrder: (id: Order["id"]) => void
        closeOrder: (id: Order["id"]) => void
        editOrder: (id: Order["id"]) => void
        deleteOrder: (id: Order["id"]) => void
    }
    filter: string
}
const ActiveOrderTable = (props: Props) => {
    return (
        <div>
            <h2>Активные заказы</h2>
            <table id="ordersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Номер карты</th>
                        <th>Заказ</th>
                        <th>Сумма</th>
                        <th>Клиент</th>
                        <th>Время</th>
                        <th>Комментарий</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders
                        .filter(
                            (order) =>
                                order.order.startsWith(props.filter) ||
                                order.cardNumber.startsWith(props.filter) ||
                                order.client.startsWith(props.filter),
                        )
                        .map((order) => (
                            <TableElement
                                key={order.id}
                                order={order}
                                delete={() =>
                                    props.actions.deleteOrder(order.id)
                                }
                                edit={() => props.actions.editOrder(order.id)}
                                close={() => props.actions.closeOrder(order.id)}
                                rename={() =>
                                    props.actions.renameOrder(order.id)
                                }
                            />
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default ActiveOrderTable
