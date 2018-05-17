const setPrototypeOf = (obj, proto) => ({ ...obj, __proto__: proto });
Object.setPrototypeOf = Object.setPrototypeOf || setPrototypeOf;
