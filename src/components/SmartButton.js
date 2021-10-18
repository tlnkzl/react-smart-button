import React from 'react';

const SmartButton = ({ onPress, data }) => {
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
      color: data.color,
      textAlign: 'center',
      backgroundColor: data.background,
      opacity: data.enabled ? '1' : '0.4'
    },
    icon: {
      marginRight: '15px',
      fontSize: '40px',
      textAlign: 'center',
    },
  };

  return (
    <button disabled={!data.enabled} style={styles.button} onClick={onPress}>
      <span className="material-icons" style={styles.icon}>
        {data.icon}
      </span>
      {data.label}
    </button>
  );
};

export default SmartButton;