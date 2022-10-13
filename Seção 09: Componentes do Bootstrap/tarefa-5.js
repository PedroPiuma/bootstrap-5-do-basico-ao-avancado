const scrollAction = () => document.querySelector("mark")?.scrollIntoView()
const click = (event) => {
  event.preventDefault()
  const cards = [...document.querySelectorAll(".card-body")]
  const addMark = () => {
    cards.forEach((el) => {
      el.innerHTML = el.innerHTML
        .replaceAll("<mark>", "")
        .replaceAll("</mark>", "")

      if (search.value)
        el.innerHTML = el.innerHTML.replace(
          search.value,
          `<mark>${search.value}</mark>`
        )
      scrollAction()
    })
  }
  addMark()
}

const search = document.querySelector("#search")
const searchBtn = document.querySelector("#searchBtn")
searchBtn.addEventListener("click", click)
