const title = document.getElementById("exp")
const content = document.getElementById("exp-li")
const list = document.getElementById("list")

title.addEventListener("click", () => {
  content.classList.toggle("toggle")
  exp.classList.toggle("toggle")
  list.classList.toggle("toggle")
})
