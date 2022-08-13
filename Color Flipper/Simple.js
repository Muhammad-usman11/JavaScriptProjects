

const colors = ["blue", "green", "orange", "lightblue", "darkblue", "darkgreen", "darkorange" ]
const button = document.getElementById("btn")
const colorText = document.querySelector(".color-text")

button.addEventListener("click", function () {
    const randomNumber = getRendomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    colorText.textContent = colors[randomNumber]
} )


function getRendomNumber() {
    return Math.floor( Math.random() * colors.length ) 

}




