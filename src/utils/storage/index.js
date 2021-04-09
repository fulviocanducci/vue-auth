export default {
  add: (key, value) => window.localStorage.setItem(key, value),
  get: (key) => window.localStorage.getItem(key),
  remove: (key) => window.localStorage.removeItem(key),
};