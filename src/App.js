import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Routes/Dashboard';
import Order from './Routes/Order';
import Customer from './Routes/Customer';
import Message from './Routes/Message';
import Settings from './Routes/Settings';
import Ticket from './Routes/Ticket';
import './Style.css'
import { DarkModeContext } from './context/darkModeContext';

export default function App() {

    const { darkMode } = useContext(DarkModeContext)

    return (
        <div className={darkMode ? "dark h-full" : "app h-full"}>
            {/* // <div className='app h-full'> */}
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
