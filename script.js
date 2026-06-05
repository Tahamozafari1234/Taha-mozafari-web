const not = () => {
  alert("دسترسی فعلا مقدور نمیباشد.");
};
console.log("من طاها مظفری، سازنده این وبسایت هستم.");
const btn = document.getElementById("darkModeToggle");
if (localStorage.theme === "dark") {
  document.body.classList.add("dark-mode");
  btn.innerText = localStorage.theme === "dark" ? "🌞لایت مود" : "🌙دارک مود";
}
btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  btn.innerText = localStorage.theme === "dark" ? "🌞لایت مود" : "🌙دارک مود";
};
const persianYear = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
}).format(new Date());
let yearElement = document.querySelector("#footer-year");
if (yearElement) {
  yearElement.innerText = persianYear;
}
