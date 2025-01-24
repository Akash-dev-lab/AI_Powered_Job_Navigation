import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Fetch admin details from localStorage on initial load
    const storedAdmin = localStorage.getItem('admin');
    console.log('Stored admin from localStorage:', storedAdmin); // Debugging line
    if (storedAdmin) {
      const parsedAdmin = JSON.parse(storedAdmin);
      console.log('Admin details fetched from localStorage:', parsedAdmin); // Debugging line
      setAdmin(parsedAdmin);
    }
  }, []);

  console.log('Current admin state:', admin); // Debugging line

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);