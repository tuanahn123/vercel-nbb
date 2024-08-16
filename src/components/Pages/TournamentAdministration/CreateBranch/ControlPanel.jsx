import React from 'react';

const ControlPanel = ({
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onTogglePan,
  onToggleScroll,
  zoomLevel,
}) => {
  return (
    <div style={controlPanelStyle}>
      <button onClick={onResetZoom} style={buttonStyle}>Reset Zoom</button>
      <button onClick={onZoomIn} style={buttonStyle}>Zoom In</button>
      <button onClick={onZoomOut} style={buttonStyle}>Zoom Out</button>
      <button onClick={onTogglePan} style={buttonStyle}>Toggle Pan</button>
      <button onClick={onToggleScroll} style={buttonStyle}>Toggle Scroll</button>
      <div style={{ marginTop: '10px', color: '#fff' }}>Zoom Level: {zoomLevel}%</div>
    </div>
  );
};

const controlPanelStyle = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: '#2b2c3a',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4B4885',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

buttonStyle.onMouseEnter = {
  backgroundColor: '#5C5A9E',
};

buttonStyle.onMouseLeave = {
  backgroundColor: '#4B4885',
};

export default ControlPanel;
