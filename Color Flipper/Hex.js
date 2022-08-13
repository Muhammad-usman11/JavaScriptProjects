

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"] 
const button = document.getElementById("btn")
const colorText = document.querySelector(".color-text") 

button.addEventListener("click", function(){
    
    let hexColor = "#"
    for(let i=0; i < 6; i++){
        hexColor += colors[getRendomNumber()] 
    }
    
    document.body.style.backgroundColor = hexColor
    colorText.textContent = hexColor

} )

function getRendomNumber() {
    return Math.floor( Math.random() * colors.length ) 

}



