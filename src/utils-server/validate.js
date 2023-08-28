export const findMissingKeysInObject = (obj, keys) => {
  const missingKeys = [];
  for (const key of keys) {
    if (!obj.hasOwnProperty(key)) {
      missingKeys.push(key);
    }
  }
  return missingKeys;
};
