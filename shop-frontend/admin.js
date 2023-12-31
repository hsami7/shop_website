// admin.js

const sideMenu = document.querySelector("aside");
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close_btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});


// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                      <td>${order.ID + 1}</td>
                      <td>${order.clientName}</td>
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${
                        order.shipping === "Declined"
                          ? "danger"
                          : order.shipping === "Pending"
                          ? "warning"
                          : "success"
                      }">${order.shipping}</td>
                      <td class="primary">Details</td>
                      `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

// Change active sidebar
sideBar.addEventListener("click", (event) => {
  const clickedItem = event.target.closest("a"); // Get the closest <a> element

  if (clickedItem) {
    // Remove "active" class from all sidebar items
    document.querySelectorAll(".sidebar a").forEach((item) => {
      item.classList.remove("active");
    });

    // Add "active" class to the clicked sidebar item
    clickedItem.classList.add("active");
  }
});

if (!localStorage.getItem("theme")) {
  document.body.classList.add("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.add("active");
  localStorage.setItem("theme", "dark");
} else {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme-variables");
    themeToggler.querySelector("span:nth-child(1)").classList.add("active");
  }
}
