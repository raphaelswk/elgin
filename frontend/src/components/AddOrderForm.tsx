import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Order } from '../types/order';

const AddOrderForm: React.FC = () => {
  const [newOrder, setNewOrder] = useState<Order>({
    orderId: 0,
    tradingDay: new Date().toISOString().split('T')[0],
    period: 1,
    quantity: 0,
    price: 0,
  });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewOrder({
      ...newOrder,
      [name]: name === 'tradingDay' ? new Date(value) : Number(value),
    });
  };

  const handleAddOrder = () => {
    axios.post('https://localhost:5000/api/orders/add?username=loggedUserName', newOrder)
      .then(response => {
        console.log('Order added successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error adding order:', error);
      });
  };

  const cancelBtnStyle = {
    marginLeft: '15px',    
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Order</h2>
      <form>
      <div className="mb-3">
          <label htmlFor="orderId" className="form-label">Order ID:</label>
          <input
            type="number"
            className="form-control"
            id="orderId"
            name="orderId"
            value={newOrder.orderId}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tradingDay" className="form-label">Trading Day:</label>
          <input
            type="date"
            className="form-control"
            name="tradingDay"
            value={newOrder.tradingDay}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="period" className="form-label">Period:</label>
          <input
            type="number"
            className="form-control"
            name="period"
            value={newOrder.period}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity (MW):</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={newOrder.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price (€/MW):</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={newOrder.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddOrder} className="btn btn-primary mb-4">
          Add Order
        </button>
        <Link to="/" className="btn btn-secondary mb-4" style={cancelBtnStyle}>Cancel</Link>
      </form>
    </div>
  );
};

export default AddOrderForm;
