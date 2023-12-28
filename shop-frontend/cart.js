// Add your JavaScript for the cart page here
function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  let total = 0;

  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function checkout() {
  // Implement checkout functionality
  alert("Checkout functionality will be implemented in the future!");
}

displayCart();
