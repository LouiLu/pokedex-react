import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
  }

  onPokemonClick = id => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`, {
      // crossDomain: true,
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        const pokemon = new Pokemon(res);
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <PokeList onPokemonClick={this.onPokemonClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
