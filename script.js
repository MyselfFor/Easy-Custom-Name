// Select Elements
let content = document.querySelector(".container");
let textArea = document.querySelector("#codeText");
let result = document.querySelector(".resultText");
let fontFamily = document.querySelector("select");
let textShadow = document.querySelector(".textShadowSetting")


// Select Inputs
let inp = document.querySelectorAll("input");
let color = document.querySelector(".colorText");
let bg = document.querySelector(".textBG");
let fontSize = document.querySelector(".FontSizeText");
let backgroundCheckbox = document.querySelector(".changeBG");
let border = document.querySelector(".borderCheck");
let colorBorder = document.querySelector(".colorBorder");
let borderSize = document.querySelector(".borderSize")

// Change text
for (let i = 0; i < inp.length; i++) {
    inp[i].value = 0;
    inp[i].addEventListener("input", function() {
        cssText();
        resultText();
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
        cssCode += `border: solid ${colorBorder.value} ${borderSize.value}px;`;
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
    result.style.border = border.checked ? `solid ${colorBorder.value} ${borderSize.value}px` : "none";
}

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
// Maybe soon :)
// textShadow.addEventListener("click", function() {
//     let createDiv = document.createElement("div");
//     createDiv.classList.add("textShadowScreen");
//     textShadow.append(createDiv);
//     for(let i = 0; i < 4; i++) {
//         let Shiftright = document.createElement("input");
//         Shiftright.type = "range";
//         Shiftright.classList.add("inp");
//         textShadow.append(Shiftright);
//     }
//     let allInp = document.querySelectorAll(".inp")
//     for(let i = 0; i < allInp.length; i++) {    
//         allInp[i].classList.remove("inp")
//         allInp[i].classList.add("shadowSetting" + i)
//             console.log(allInp)
//             textShadow.addEventListener("dblclick", function() {
//                 createDiv.remove();
//             allInp[i].remove();
//         })
//     }  
// })