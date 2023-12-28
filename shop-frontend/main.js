// Add your JavaScript for the main page here
function addToCart(productName, price) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push({ productName, price });
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

// ... (other functions)
