const textArea = document.getElementById("textarea");
const fontSize = document.getElementById("font-size");


function fun1(a) {
    let value = a.value;
    if (value > 100) {
        textArea.style.fontSize = "18px"
    } else {
        textArea.style.fontSize = value + "px";

    }
}

function fun2() {
    if (textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal";
    } else {
        textArea.style.fontWeight = "bold"
    }
}

function fun3() {
    if (textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal"
    } else {
        textArea.style.fontStyle = "italic"
    }
}

function fun4() {
    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none"
    } else {
        textArea.style.textDecoration = "underline"
    }
}

function fun5() {
    textArea.style.textAlign = "start"
}

function fun6() {
    textArea.style.textAlign = "center"
}

function fun7() {
    textArea.style.textAlign = "end"
}

function fun8() {
    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "capitalize"
    } else if (textArea.style.textTransform == "capitalize") {
        textArea.style.textTransform = "lowercase"
    } else {
        textArea.style.textTransform = "uppercase"
    }

}

function fun9() {
    textArea.style.fontWeight = "normal"
    textArea.style.textDecoration = "none"
    textArea.style.textTransform = "capitalize"
    textArea.style.textAlign = "start"
    textArea.style.fontStyle = "normal"
    fontSize.value = "18"
    textArea.style.fontSize = "18px"
    textArea.value = ""
    textArea.style.backgroundColor = "white";
}

function fun10(a) {
    let value = a.value;
    textArea.style.color = value;
}

function fun11(a){
    let value = a.value;
    textArea.style.backgroundColor = value;
}



