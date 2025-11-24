class Pokemon {
  static allPokemon = [];

  #health = 100;

  #level = 1;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  levelUp() {
    this.#level += 1;
    this.#health += 10;
    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    if (this.#health <= 0) {
      return true;
    }
    return false;
  }

  attack(targetPokemon) {
    targetPokemon.#health -= (this.#level * 10);
    console.log(`${this.name} attacked ${targetPokemon.name}!`);
  }

  static getTotalPokemon() {
    return this.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((poke) => poke.name === name);
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };
