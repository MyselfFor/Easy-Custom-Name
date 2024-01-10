// Select Elements
let content = document.querySelector(".container");
let textArea = document.querySelector("#codeText");
let result = document.querySelector(".resultText");
let fontFamily = document.querySelector("select");


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
        console.log(fontFamily.value)
    });
}

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

    if (fontFamily.value == "RubikFont") {
        cssCode += `font-family: "Rubik", sans-serif;`;
    } else if (fontFamily.value == "ScriptFont") {
        cssCode += `font-family: "Dancing Script, cursive;`;
    } else if (fontFamily.value == "PlexMonoFont") {
        cssCode += `font-family: "IBM Plex Mono, monospace;`;
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
// Add a separate event listener for fontSize
fontSize.addEventListener("change", function() {
    resultText();
});
fontFamily.addEventListener("change", function() {
    cssText();
    switch (fontFamily.value) {
        case "PlexMonoFont":
            result.style.fontFamily = "IBM Plex Mono, monospace";
            break;
        case "ScriptFont":
            result.style.fontFamily = "Dancing Script, cursive";
            break;
        case "RubikFont":
            result.style.fontFamily = "Rubik, sans-serif";
            break;
    }
});

// while (true) {
//     console.log(fontFamily.value)
// }




// Basick mathematical power function
// let num1, num2;

// while (true) {
//   let input1 = prompt("Enter the first number");
//   let input2 = prompt("Enter the degree for number");

//   num1 = parseFloat(input1);
//   num2 = parseFloat(input2);

//   if (!isNaN(num1) && !isNaN(num2)) {
//     break;
//   } else {
//     alert("Please enter valid numbers for both inputs");
//   }
// }

// alert(`You entered valid numbers: ${num1**num2}`);