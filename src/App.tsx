import React, { useState } from 'react';
import './App.css';
import ActiveOrderTable from './ActiveOrderTable';
import OrderHistory from './OrderHistory';
import { Order } from './types';
import OrderEditForm from './OrderEditForm';
import { sampleOrders } from './sampleData';

function App() {
  const [latestId, setLatestId] = useState(sampleOrders[sampleOrders.length - 1].id);
  const [orders, setOrders] = useState(sampleOrders);
  const [history, setHistory] = useState<Order[]>([]);
  const [isHistoryVisible, setHistoryVisible] = useState(false);
  const toggleHistoryVisibility = () => setHistoryVisible(x => !x)

  const [editableOrderId, setEditableOrderId] = useState<Order['id'] | null>(null);

  const deleteOrder = (id: Order['id']) => setOrders(orders => orders.filter(o => o.id !== id))
  const renameOrder = (id: Order['id']) => {
    const newName = prompt('Введите новое имя заказа: ')
    if (!newName) return;
    setOrders(orders =>
      orders.map(
        order => order.id === id ? ({ ...order, order: newName }) : order)
    )
  }
  const closeOrder = (id: Order['id']) => {
    const order = orders.find(o => o.id === id)
    if (!order) return
    setOrders(orders => orders.filter(o => o.id !== id))
    setHistory(history.concat(order))
  }
  const editOrder = (id: Order['id']) => setEditableOrderId(id);

  const handleFormSubmit = (newOrder: Order) => {
    setOrders(orders =>
      newOrder.id === latestId ? orders.concat(newOrder) :
        orders.map(o => o.id === newOrder.id ? newOrder : o)
    )
    setEditableOrderId(null)
  }
  const handleFormCancel = () => {
    setLatestId(latestId => orders.some(o => o.id === latestId) ? latestId : latestId - 1)
    setEditableOrderId(null)
  }

  const addNewOrder = () => {
    if (editableOrderId === latestId) return;
    const newId = latestId + 1
    setLatestId(newId)
    setEditableOrderId(newId)
  }

  const [searchBarText, setSearchBarText] = useState('');
  return (
    <div className="App">
      <div className="toolbar">
        <input placeholder="Поиск" type="text" value={searchBarText} onChange={e => { setSearchBarText(e.target.value) }} />
        <button onClick={addNewOrder}>Новый</button>
        <button onClick={toggleHistoryVisibility}>История заказов</button>
      </div>
      <ActiveOrderTable orders={orders} filter={searchBarText} actions={{
        deleteOrder,
        renameOrder,
        closeOrder,
        editOrder
      }} />
      {isHistoryVisible && <OrderHistory orders={history} />}
      {editableOrderId ? <OrderEditForm order={orders.find(o => o.id === editableOrderId) || { id: editableOrderId }} onSubmit={handleFormSubmit} onCancel={handleFormCancel} /> : null}
    </div>
  );
}

export default App;
