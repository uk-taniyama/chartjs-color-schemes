export class Registry<T> {
  /** @private */
  items: Record<string, T>;

  constructor(value: T) {
    this.items = { default: value };
  }

  add(name: string, value: T) {
    this.items[name] = value;
  }

  addAll(items: Record<string, T>) {
    Object.entries(items).forEach(([name, value]) => this.add(name, value));
  }

  get names() {
    return Object.keys(this.items);
  }

  get(name?: string): T {
    if (name == null) {
      return this.items.default;
    }
    const value = this.items[name];
    if (value == null) {
      return this.items.default;
    }
    return value;
  }

  clear(): void {
    this.items = { default: this.items.default };
  }
}
