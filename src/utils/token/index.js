import storage from "../storage";

export default {
  add: (value) => storage.add("@token", value),
  get: () => storage.get("@token"),
  remove: () => storage.remove("@token"),
};
