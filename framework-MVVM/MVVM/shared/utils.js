export function isObject(value) {
  return Object.prototype.toString.call(value).includes('Object');
}

export function hasOwnProperty(target, key) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

export function isEqual(oldVal, newVal) {
  return oldVal === newVal;
}

export function randomNum() {
  return new Date().getTime() + parseInt(Math.random() * 10000);
}
