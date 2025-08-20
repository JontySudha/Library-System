import React, { useState } from "react";
import { FaBars, FaTimes, FaChartPie, FaMoneyBillWave, FaClipboardList, FaWallet, FaCog, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { title: "Transactions", path: "/transactions", icon: <FaMoneyBillWave /> },
    { title: "Analytics", path: "/analytics", icon: <FaClipboardList /> },
    { title: "Budget", path: "/budget", icon: <FaWallet /> },
    { title: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar for large screens */}
      <div className={`bg-black text-white fixed lg:static lg:w-64 w-64 h-full p-5 shadow-lg transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-bold text-purple-500">FinTrack</h1>
          <button className="lg:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-2 rounded-md text-gray-400 hover:text-white transition ${
                  location.pathname === item.path ? "bg-gray-900 text-purple-400" : ""
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle button for mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-black p-2 rounded-md">
          {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {/* Bottom Navbar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black py-2 shadow-md flex justify-around">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className={`flex flex-col items-center text-gray-400 ${location.pathname === item.path ? "text-purple-500" : ""}`}>
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs">{item.title}</span>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 text-white bg-gray-950">
        <h2 className="text-3xl font-bold">Main Content</h2>
      </div>
    </div>
  );
};

export default Sidebar;
