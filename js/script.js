var sections = document.querySelectorAll(".section");
var li = document.querySelectorAll(".nav li");
var currentSection = "";

li.forEach((el) => {
  el.addEventListener("click", function (e) {
    var lien = e.target.textContent.trim();
    e.preventDefault();
    sections.forEach((el) => {
      el.classList.remove("show");
      if (el.classList.contains(lien.toLowerCase())) {
        el.classList.add("show");
        currentSection = el.dataset.title.toString();
      }
    });
    li.forEach((el) => {
      el.classList.remove("active");
      if (el.lastElementChild.textContent === currentSection) {
        el.classList.add("active");
      }
    });
  });
});
