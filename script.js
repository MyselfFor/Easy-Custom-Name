// Select Elements
let inp = document.querySelectorAll("input");
let content = document.querySelector(".container");
let textArea = document.querySelector("#codeText");
let result = document.querySelector(".resultText");

// Select Inputs
let color = document.querySelector(".colorText");
let bg = document.querySelector(".textBG");
let fontSize = document.querySelector(".FontSizeText");
let backgroundCheckbox = document.querySelector(".changeBG");
let border = document.querySelector(".borderCheck")

// Change text in textArea
for (let i = 0; i < 3; i++) {
    cssText();
    inp[i].value = 0;
    inp[i].addEventListener("input", function() {
        cssText();
        resultText();
    });
}

// Function to update CSS text
function cssText() {
    let cssCode = `color: ${color.value};`;
    cssCode += `background: ${bg.value};`;
    cssCode += `font-size: ${fontSize.value}px;`;
    textArea.innerText = cssCode;
}

// Function to hide the text of result
function resultText() {
    result.style.color = color.value;
    result.style.background = backgroundCheckbox.checked ? "none" : bg.value;
    result.style.fontSize = fontSize.value / 1.25 + "px";
    result.style.border = border.checked ? "solid black 2px": "none";
}

// Event listener for background checkbox 
backgroundCheckbox.addEventListener('change', function() {
    resultText();
});
// Event listener for border checkbox 
border.addEventListener('change', function() {
    resultText();
});

