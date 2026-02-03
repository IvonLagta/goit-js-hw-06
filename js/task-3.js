class StringBuilder {
  #symbol;

  constructor(symbol) {
    this.#symbol = symbol;
  }
  getValue() {
    return this.#symbol;
  }

  padStart(val1) {
    this.#symbol = val1 + this.#symbol;
  }

  padEnd(val2) {
    this.#symbol += val2;
  }
  padBoth(val3) {
    this.#symbol = val3 + this.#symbol + val3;
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."

builder.padStart('^');
console.log(builder.getValue()); // "^."

builder.padEnd('^');
console.log(builder.getValue()); // "^.^"

builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
