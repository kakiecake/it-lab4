import { Order } from "./types"
import HistoryElement from "./HistoryElement"

type Props = {
    orders: Order[]
}

const OrderHistory = ({ orders }: Props) => {
    return (
        <div>
            <h2>История заказов</h2>
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
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <HistoryElement key={order.id} {...order} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
