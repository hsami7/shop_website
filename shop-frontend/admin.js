// admin.js

// Assuming you have a 'products' array in localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// Function to add a new product
function addProduct() {
  const title = prompt("Enter product title:");
  const price = parseFloat(prompt("Enter product price:"));
  const category = prompt("Enter product category:");

  if (title && !isNaN(price) && category) {
    const newProduct = {
      title,
      price,
      category,
    };

    products.push(newProduct);
    updateProductList();
    saveProductsToLocalStorage();

    alert("Product added successfully!");
  } else {
    alert("Invalid input. Please enter valid information.");
  }
}

// Function to update the product list on the admin page
function updateProductList() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${product.title} - $${product.price.toFixed(
      2
    )} - ${product.category}`;
    productList.appendChild(li);
  });
}

// Function to save the 'products' array to localStorage
function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Initial update of the product list
updateProductList();
