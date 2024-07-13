
import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard/BasketballPlayerCard';
import './App.css';

const player = {
  name: 'LeBron James',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoqoID2Hd1fb9pYmS0UYvFuO61yYEPu_oKFA&s',
  hoverImage: 'https://static01.nyt.com/images/2022/09/02/sports/02nba-lebron-1/merlin_203874528_da0d084d-e216-41b4-b8e5-d1f681a8f2e2-mediumSquareAt3X.jpg',
  position: 'Forward',
  stats: {
    pointsPerGame: 27.1,
    assistsPerGame: 7.4,
    reboundsPerGame: 7.4,
  },
};

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        hoverImage={player.hoverImage}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
