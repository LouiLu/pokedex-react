import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass, onPokemonClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = {
    backgroundImage: `url(${sprites})`,
    backgroundPosition
  };

  return (
    <div>
      <button
        style={style}
        className="poke-cell"
        onClick={() => onPokemonClick(id)}
      />
    </div>
  );
};

export default PokeCell;
