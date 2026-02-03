function truthCheck(collection, pre) {
  // Check if every object has the property and it's truthy
  return collection.every(obj => obj[pre]);
}


truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


