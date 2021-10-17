import React from 'react';

const SmartButton = ({ onPress, data }) => {
  let styles = {
    button: {
      width: '100px',
      height: '50px',
      color: data.color,
      backgroundColor: data.background,
    },
    icon: {
      marginRight: '15px',
      fontSize: '40px',
    },
  };

  return (
    <button style={styles.button} onClick={onPress}>
      <span className="material-icons" style={styles.icon}>
        {data.icon}
      </span>
      {data.label}
    </button>
  );
};

export default SmartButton;
