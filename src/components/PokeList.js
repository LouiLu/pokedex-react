import React from 'react';
import './styles/PokeList.css';
import { pokeClasses } from '../pokeClasses';

import PokeCell from './PokeCell';

const PokeList = ({ onPokemonClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        onPokemonClick={onPokemonClick}
      />
    );
  });

  return <div className="poke-list">{cells}</div>;
};

export default PokeList;
