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
