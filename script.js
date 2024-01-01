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
    cssText();
    inp[i].value = 0;
    inp[i].addEventListener("input", function() {
        cssText();
        resultText();
    })
}
//Function of text
function cssText() {
    let cssCode = `color: ${color.value};`;
    cssCode += `background: ${bg.value};`;
    cssCode += `font-size: ${fontSize.value}px;`;
    textArea.innerText = cssCode;
}
function resultText() {
    result.style.color = color.value;
    result.style.background = bg.value;
    result.style.fontSize = fontSize.value / 1.25 + "px";
}