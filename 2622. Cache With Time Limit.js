class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const existingEntry = this.cache.get(key);
    if (existingEntry) {
      clearTimeout(existingEntry.timeout);
    }

    const timeout = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeout });

    return Boolean(existingEntry);
  }

  get(key) {
    const entry = this.cache.get(key);
    if (entry) {
      return entry.value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}
