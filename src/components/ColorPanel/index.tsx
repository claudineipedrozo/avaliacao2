import React from 'react';

interface ColorPanelProps {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const ColorPanel: React.FC<ColorPanelProps> = ({ red, green, blue, alpha }) => {
  const colorStyle = {
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
    width: '500px',
    height: '500px',
  };

  return <div data-cy="color-panel" style={colorStyle} />;
};

export default ColorPanel;