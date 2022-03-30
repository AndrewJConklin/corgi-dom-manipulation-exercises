//Append an `<h2>` with the text "Iago" to the body

const body = document.querySelector("body")
const h2 = document.createElement("h2")

h2.textContent = "Iago"

body.append(h2)