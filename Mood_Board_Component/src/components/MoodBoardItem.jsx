import React from 'react';

export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div
      className="mood-board-item"
      style={{
        backgroundColor: color,
        width: '220px',
        padding: '15px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        margin: '10px'
      }}
    >
      <img
        className="mood-board-image"
        src={image}
        alt={description}
        style={{
          width: '100%',
          height: '140px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px'
        }}
      />
      <h3
        className="mood-board-text"
        style={{
          fontSize: '1rem',
          fontWeight: '600',
          color: '#333'
        }}
      >
        {description}
      </h3>
    </div>
  );
};
