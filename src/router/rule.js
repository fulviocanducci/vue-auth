import token from "../utils/token";

export default (to, from, next) => {
  const value = token.get();
  if (to.name !== "login" && !value) {
    next({ name: "login" });
  } else {
    if (to.name === "login" && value) {
      next({ name: "home" });
    } else {
      next();
    }
  }
};
