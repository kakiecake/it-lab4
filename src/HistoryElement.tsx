import { Order } from "./types"

const HistoryElement = (order: Order) => {
    return (
        <tr>
            <td>${order.id}</td>
            <td>${order.cardNumber}</td>
            <td>${order.order}</td>
            <td>${order.total}</td>
            <td>${order.client}</td>
            <td>${order.time}</td>
            <td>${order.comment || "-"}</td>
        </tr>
    )
}

export default HistoryElement
