class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }

  padStart(val1) {
    this.#value = val1 + this.#value;
  }

  padEnd(val2) {
    this.#value += val2;
  }
  padBoth(val3) {
    this.#value = val3 + this.#value + val3;
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
