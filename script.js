//elements
let inp = document.querySelectorAll("input");
let content = document.querySelector(".container");
let textArea = document.querySelector("#codeText")
let result = document.querySelector(".resultText")

//inputs
let color = document.querySelector(".colorText")
let bg = document.querySelector(".textBG")
let fontSize = document.querySelector(".FontSizeText")

// Change text in textArea 
for (let i = 0; i < inp.length; i++) {
    inp[i].value = 0;
    inp[i].addEventListener("input", function() {
        textArea.innerText = `color: ${color.value};`
        textArea.innerText = `background: ${bg.value};`
        textArea.innerText = `FontSize: ${fontSize.value};`
        result.style.color = color.value;
        result.style.background = bg.value;
        result.style.fontSize = fontSize.value / 1.25 + "px";

    })
}
