const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  // Exercise 1: Use forEach to console.log each product name
  console.log("Exercise 1:");
  products.forEach(product => console.log(product.product));
  
  // Exercise 2: Use filter to filter out products with names longer than 5 characters
  console.log("Exercise 2:");
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts);
  
  // Exercise 3: Using filter and map, convert prices to numbers and remove products without prices. Then use reduce to calculate the total price.
  console.log("Exercise 3:");
  const validProducts = products
    .filter(product => product.price !== '' && !isNaN(product.price))
    .map(product => ({ product: product.product, price: Number(product.price) }));
  const totalPrice = validProducts.reduce((total, product) => total + product.price, 0);
  console.log("Valid Products:", validProducts);
  console.log("Total Price:", totalPrice);
  
  // Exercise 4: Use reduce to concatenate all product names
  console.log("Exercise 4:");
  const concatenatedNames = products.reduce((result, product, index) => {
    if (index === 0) {
      return product.product;
    }
    if (index === products.length - 1) {
      return result + ' and ' + product.product;
    }
    return result + ', ' + product.product;
  }, '');
  console.log(concatenatedNames);
  
  // Exercise 5: Use reduce to calculate the highest and lowest-priced items
  console.log("Exercise 5:");
  const { highest, lowest } = products.reduce(
    (result, product) => {
      const price = Number(product.price);
      if (isNaN(price)) return result;
      if (price > result.highest.price) result.highest = product;
      if (price < result.lowest.price) result.lowest = product;
      return result;
    },
    { highest: { price: -Infinity }, lowest: { price: Infinity } }
  );
  console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}`);
  
  // Exercise 6: Recreate the object with modified keys using Object.entries and reduce
  console.log("Exercise 6:");
  const modifiedProducts = products.reduce((result, product) => {
    const modifiedProduct = Object.entries(product).reduce((newProduct, [key, value]) => {
      if (key === 'product') {
        newProduct.name = value;
      } else if (key === 'price') {
        newProduct.cost = value;
      }
      return newProduct;
    }, {});
    result.push(modifiedProduct);
    return result;
  }, []);
  console.log(modifiedProducts);
  