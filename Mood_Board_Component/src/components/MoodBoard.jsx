import React from 'react';
import { MoodBoardItem } from './MoodBoardItem';

export const MoodBoard = () => {
  return (
    <div>
      <h1
        className="mood-board-heading"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        Destination Mood Board
      </h1>
      <div
        className="mood-board"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}
      >
        <MoodBoardItem
          color="#f0e68c"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Peaceful Pathway"
        />
        <MoodBoardItem
          color="#add8e6"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Relaxing Shore"
        />
        <MoodBoardItem
          color="#98fb98"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Fresh Green Grass"
        />
      </div>
    </div>
  );
};
