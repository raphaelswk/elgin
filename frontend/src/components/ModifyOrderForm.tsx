import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Order } from '../types/order';

const ModifyOrderForm: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order>({
    orderId: 0,
    tradingDay: new Date().toISOString(),
    period: 0,
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  const fetchOrderDetails = () => {
    axios.get<Order>(`https://localhost:5000/api/orders/getById/${orderId}`)
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error('Error fetching order details:', error);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrder({
      ...order,
      [name]: name === 'tradingDay' ? new Date(value) : Number(value),
    });
  };

  const handleModifyOrder = () => {
    axios.put(`https://localhost:5000/api/orders/modify/${orderId}?username=loggedUserName`, order)
      .then(response => {
        console.log('Order modified successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error modifying order:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Modify Order {orderId}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="orderId" className="form-label">Order ID:</label>
          <input
            type="number"
            className="form-control"
            id="orderId"
            name="orderId"
            value={order.orderId}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tradingDay" className="form-label">Trading Day:</label>
          <input
            type="date"
            className="form-control"
            id="tradingDay"
            name="tradingDay"
            value={order.tradingDay}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="period" className="form-label">Period:</label>
          <input
            type="number"
            className="form-control"
            id="period"
            name="period"
            value={order.period}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={order.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={order.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleModifyOrder}>
          Modify Order
        </button>
        <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
      </form>
    </div>
  );
};

export default ModifyOrderForm;
