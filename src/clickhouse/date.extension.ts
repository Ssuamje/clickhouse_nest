declare global {
  interface Date {
    toClickhouseTS(): string;
  }
}

Date.prototype.toClickhouseTS = function () {
  return this.toISOString()
    .replace('T', ' ')
    .replace(/\.\d{3}Z$/, '');
};

export {};
