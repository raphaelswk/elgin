import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import { Order } from '../types/order';

const OrderBook: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get<Order[]>('https://localhost:5000/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Order Book</h2>
      <Link to="/add-order" className="btn btn-primary mb-4">
        Add New Order
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Trading Day</th>
            <th>Period</th>
            <th>Quantity (MW)</th>
            <th>Price (€/MW)</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{format(parseISO(order.tradingDay), 'dd/MM/yyyy')}</td>
              <td>{order.period}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>
              <Link to={`/modify-order/${order.orderId}`} className="btn btn-primary mb-4">
                Modify Order
              </Link>              
              </td>
              <td>
              <Link to={`/remove-order/${order.orderId}`} className="btn btn-danger mb-4">
                Remove Order
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
