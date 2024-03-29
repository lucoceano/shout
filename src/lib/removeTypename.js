const removeTypename = value => {
  if (value === null || value === undefined || value instanceof Date) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(v => removeTypename(v));
  } else if (typeof value === 'object') {
    const newObj = {};
    Object.entries(value).forEach(([key, v]) => {
      if (key !== '__typename' && key !== '@@id') {
        newObj[key] = removeTypename(v);
      }
    });
    return newObj;
  }
  return value;
};

export default removeTypename;
