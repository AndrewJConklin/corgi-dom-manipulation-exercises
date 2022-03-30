// Create a new `<ul>` element. Append an `<li>` with the text "Kiki" to it. Append the `<ul>` to the `.queens` `<div>`

const ul = document.createElement("ul")
const li = document.createElement("li")

li.textContent = "Kiki"

ul.append(li)

const queens = document.querySelector(".queens")

queens.append(ul)