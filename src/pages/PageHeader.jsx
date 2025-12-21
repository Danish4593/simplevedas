import React from "react";
import { useLocation } from "react-router-dom";

const PageHeader = ({ backgroundImage, title, forceShow = false }) => {
  const location = useLocation();
  const imag='https://www.simplevedas.com/wp-content/uploads/2022/05/Breadcrumb-7.jpg'
  
  // Don't show PageHeader on home page unless forceShow is true
  if (location.pathname === '/' && !forceShow) {
    return null;
  }
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src={imag} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
      <div style={{  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '100px' }}>
        <h1 style={{ color: 'white', zIndex: 1, fontWeight: 'bold' }}>{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;

