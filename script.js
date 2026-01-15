const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const totalElement = document.querySelector(".total");

// Calculate total price
function calculateTotal() {
  let total = 0;

  const items = document.querySelectorAll(".card-body");

  items.forEach(item => {
    const price = parseFloat(
      item.querySelector(".unit-price").innerText.replace("$", "")
    );
    const quantity = parseInt(item.querySelector(".quantity").innerText);

    total += price * quantity;
  });

  totalElement.innerText = total + " $";
}

// Increase quantity
plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    quantitySpan.innerText = parseInt(quantitySpan.innerText) + 1;
    calculateTotal();
  });
});

// Decrease quantity
minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    let value = parseInt(quantitySpan.innerText);

    if (value > 1) {
      quantitySpan.innerText = value - 1;
      calculateTotal();
    }
  });
});

// Delete item
deleteBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    calculateTotal();
  });
});

// Like item
likeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// Initial total
calculateTotal();
