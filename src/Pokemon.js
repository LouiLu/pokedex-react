class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.types = data.types;
    this.stats = data.stats;
  }
}

export default Pokemon;
