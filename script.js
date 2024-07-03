// Animation using GSAP
gsap.from("h1", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 0.5,
});
gsap.from("#expense-form", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
});
gsap.from(".add-expense", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
});
gsap.from("h2", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.5,
});
gsap.from("#expense-table", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.5,
});

// Javascript code
const expenseForm = document.querySelector("#expense-form");
const expenseList = document.querySelector("#expense-list");

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = document.querySelector("#description").value;
  const category = document.querySelector("#category").value;
  const date = document.querySelector("#date").value;
  let amount = document.querySelector("#amount").value;

  if (document && category && !isNaN(amount)) {
    const expenses = document.createElement("tr");

    expenses.innerHTML = `<td>${description}</td>
                <td>${category}</td>
                <td>${date}</td>
                <td>${amount}</td>`;

    expenseList.appendChild(expenses);

    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
  }
});
