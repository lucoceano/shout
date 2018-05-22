Object.setPrototypeOf =
  Object.setPrototypeOf ||
  function setPrototypeOf(obj, proto) {
    obj.__proto__ = proto; // eslint-disable-line
    return obj;
  };
