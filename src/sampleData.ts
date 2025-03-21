import { Order } from "./types";

export const sampleOrders: Order[] = [
  {
    id: 1,
    cardNumber: "1234567890123456",
    order: "Заказ такой-то",
    total: 1000,
    client: "Альберт",
    time: "12:30",
    comment: "это срочно",
  },
  {
    id: 2,
    cardNumber: "9876543210987654",
    order: "заказ Ивана",
    total: 1800,
    client: "Иван",
    time: "14:00",
  },
  {
    id: 3,
    cardNumber: "4567890123456789",
    order: "еще один заказ",
    total: 550,
    client: "Никита",
    time: "12:00",
    comment: "комментарий",
  },
]

