import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OrderBook from './components/OrderBook';
import AddOrderForm from './components/AddOrderForm';
import ModifyOrderForm from './components/ModifyOrderForm';
import RemoveOrderForm from './components/RemoveOrderForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderBook />} />
        <Route path="/add-order" element={<AddOrderForm />} />
        <Route path="/modify-order/:orderId" element={<ModifyOrderForm />} />
        <Route path="/remove-order/:orderId" element={<RemoveOrderForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
