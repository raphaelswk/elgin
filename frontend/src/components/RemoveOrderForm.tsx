import React from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const RemoveOrderForm: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const handleRemoveOrder = () => {
    axios.delete(`https://localhost:5000/api/orders/remove/${orderId}?username=loggedUserName`)
      .then(response => {
        console.log('Order removed successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error removing order:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Remove Order {orderId}</h2>
      <p>Are you sure you want to remove this order?</p>
      <button type="button" className="btn btn-danger" onClick={handleRemoveOrder}>
        Remove Order
      </button>
      <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
    </div>
  );
};

export default RemoveOrderForm;
