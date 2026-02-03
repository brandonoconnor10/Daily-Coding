function whatIsInAName(collection, source) {
  // Get the keys from the source object
  const sourceKeys = Object.keys(source);

  // Filter the collection
  return collection.filter(obj =>
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

