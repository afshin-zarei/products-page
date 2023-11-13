const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttnos = document.querySelectorAll(".filter");
const priceDiv = document.getElementById("search-price");
const priceButton = priceDiv.querySelector("button");

const changeClass = (filter) => {
   buttnos.forEach((button) => {
      if (button.dataset.filter === filter) button.classList.add("selected");
      else button.classList.remove("selected");
   });
};

const searchHandler = (event) => {
   searchValue = event.target.value.toLowerCase().trim();

   products.forEach((product) => {
      productName = product.children[1].innerText.toLowerCase();
      if (productName.includes(searchValue)) product.style.display = "block";
      else product.style.display = "none";
   });
};

const filterHandler = (event) => {
   const filter = event.target.dataset.filter;
   changeClass(filter);
   products.forEach((product) => {
      const category = product.dataset.category;
      if (filter === "all") product.style.display = "block";
      else
         filter === category
            ? (product.style.display = "block")
            : (product.style.display = "none");
   });
};

const searchPriceHandler = () => {
   const searchPrice = +priceDiv.children[0].value;
   products.forEach((product) => {
      const productPrice = product.children[2].innerText;
      const price = +productPrice.split(" ")[1];
      if (!searchPrice === price) {
         product.style.display = "block";
      } else {
         searchPrice === price
            ? (product.style.display = "block")
            : (product.style.display = "none");
      }
   });
};

const start = () => {
   buttnos.forEach((button) => {
      button.addEventListener("click", filterHandler);
   });
   searchInput.addEventListener("keyup", searchHandler);
   priceButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", start);
