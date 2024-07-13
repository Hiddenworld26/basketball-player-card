
import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, hoverImage, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
      <img src={hoverImage} alt={`${name} hover`} className="player-image-hover" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
