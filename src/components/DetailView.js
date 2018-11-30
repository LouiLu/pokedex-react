import React from 'react';
import './styles/DetailView.css';
import PokemonStatus from './pokemonDetails/PokemonStatus';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, types, stats } = pokemon;

  return (
    <div className="detail-view">
      <img src={sprite} className="sprite-image" alt="" />
      <PokemonStatus statsData={stats} />
      <div className="data-wrapper">
        <h1 className="data-name">
          ID: {id} {name}
        </h1>
        <p className="data-char">Types: </p>
      </div>
    </div>
  );
};

export default DetailView;
