// Select Elements
let content = document.querySelector(".container");
let textArea = document.querySelector("#codeText");
let result = document.querySelector(".resultText");

// Select Inputs
let inp = document.querySelectorAll("input");
let color = document.querySelector(".colorText");
let bg = document.querySelector(".textBG");
let fontSize = document.querySelector(".FontSizeText");
let backgroundCheckbox = document.querySelector(".changeBG");
let border = document.querySelector(".borderCheck");
let colorBorder = document.querySelector(".colorBorder");

// Change text in textArea
for (let i = 0; i < inp.length; i++) {
    inp[i].value = 0;
    inp[i].addEventListener("input", function() {
        cssText();
        resultText();
    });
}

// Add a separate event listener for fontSize
fontSize.addEventListener("input", function() {
    cssText();
    resultText();
});
// Function to update CSS text
function cssText() {
    let cssCode = `color: ${color.value};`;

    if (backgroundCheckbox.checked) {
        cssCode += `background: ${bg.value};`;
    } else {
        cssCode += `background: none;`;
    }

    if (border.checked) {
        cssCode += `border: solid ${colorBorder.value} 2px;`;
    } else {
        cssCode += `border: none;`;
    }

    cssCode += `font-size: ${fontSize.value / 1.25}px;`;
    textArea.innerText = cssCode;
}
// Function to change the text of result
function resultText() {
    result.style.color = color.value;
    result.style.background = backgroundCheckbox.checked ? bg.value : "none";
    result.style.fontSize = fontSize.value / 1.25 + "px";
    result.style.border = border.checked ? `solid ${colorBorder.value} 2px` : "none";
}
// Event listener for background checkbox 
backgroundCheckbox.addEventListener('change', function() {
    resultText();
});
// Event listener for border checkbox
border.addEventListener('change', function() {
    resultText();
});







// Basick mathematical power function
let num1, num2;

while (true) {
  let input1 = prompt("Enter the first number");
  let input2 = prompt("Enter the degree for number");

  num1 = parseFloat(input1);
  num2 = parseFloat(input2);

  if (!isNaN(num1) && !isNaN(num2)) {
    break;
  } else {
    alert("Please enter valid numbers for both inputs");
  }
}

alert(`You entered valid numbers: ${num1**num2}`);