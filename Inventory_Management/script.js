// Step 1: Declare inventory array
let inventory = [];

// Step 2: Function to find product index
function findProductIndex(productName) {
  let name = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }
  return -1;
}

// Step 3: Function to add product
function addProduct(product) {
  let name = product.name.toLowerCase();
  let index = findProductIndex(name);

  if (index !== -1) {
    // Product exists, update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    // Product not found, add new
    inventory.push({ name: name, quantity: product.quantity });
    console.log(`${name} added to inventory`);
  }
}

// Step 4: Function to remove product
function removeProduct(productName, quantity) {
  let name = productName.toLowerCase();
  let index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      inventory.splice(index, 1);
    } else {
      console.log(`Remaining ${name} pieces: ${product.quantity}`);
    }
  }
}
