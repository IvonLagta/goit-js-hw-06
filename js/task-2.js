class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }

  addItem(addition) {
    this.#items.push(addition);
  }

  removeItem(subtraction) {
    this.#items = this.#items.filter(item => item !== subtraction);
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
