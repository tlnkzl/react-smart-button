import React from 'react';

const SmartButton = ({ onPress, data }) => {
  const { icon, label, color, background, enabled, style } = data;
  let styles = {
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      height: '70px',
      borderRadius: '20px',
      margin: '10px',
      fontSize: '28px',
      fontWeight: 'bold',
      color: color,
      textAlign: 'center',
      backgroundColor: background,
      opacity: enabled ? '1' : '0.4',
    },
    icon: {
      marginRight: '15px',
      fontSize: '40px',
      textAlign: 'center',
    },
  };

  return (
    <button
      data-testid="smart-button"
      disabled={!enabled}
      style={{ ...styles.button, ...style }}
      onClick={onPress}
    >
      <span className="material-icons" style={styles.icon}>
        {icon}
      </span>
      {label}
    </button>
  );
};

export default SmartButton;
