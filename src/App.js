import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Routes/Dashboard';
import Order from './Routes/Order';
import Customer from './Routes/Customer';
import Message from './Routes/Message';
import Settings from './Routes/Settings';
import Ticket from './Routes/Ticket';

export default function App() {
    return (
        <div className='h-full'>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Order' element={<Order />} />
                <Route path='/Ticket' element={<Ticket />} />
                <Route path='/Customer' element={<Customer />} />
                <Route path='/Message' element={<Message />} />
                <Route path='/Settings' element={<Settings />} />
            </Routes>
        </div>
    );
}
