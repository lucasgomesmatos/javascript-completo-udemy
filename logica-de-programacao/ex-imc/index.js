var formSubmit = document.querySelector('.form');
function handleSubmit(event) {
    event.preventDefault();
    var inputWeight = Number(event.target.querySelector('#peso').value);
    var inputHeight = Number(event.target.querySelector('#altura').value);
    if (!inputWeight) {
        setResult("Peso inválido", false);
        return;
    }
    if (!inputHeight) {
        setResult("Altura inválido", false);
        return;
    }
    ;
    var imc = Number(getIMC(inputWeight, inputHeight));
    var msg = "Seu IMC \u00E9 ".concat(imc, ". ") + getGradeIMC(imc);
    setResult("".concat(msg), true);
    console.log(imc);
}
function getIMC(weight, height) {
    return (weight / (height * height)).toFixed(2);
}
function setResult(msg, isValid) {
    var result = document.querySelector(".resultado");
    var paragraph = document.createElement('p');
    result.innerHTML = "";
    isValid ? paragraph.classList.add("paragrafo-resultado") : paragraph.classList.add("paragrafo-error");
    paragraph.innerHTML = msg;
    result.appendChild(paragraph);
}
formSubmit === null || formSubmit === void 0 ? void 0 : formSubmit.addEventListener("submit", handleSubmit);
function getGradeIMC(imc) {
    var grade = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3',
    ];
    if (imc >= 39.9) {
        return grade[5];
    }
    if (imc >= 34.9) {
        return grade[4];
    }
    if (imc >= 29.9) {
        return grade[3];
    }
    if (imc >= 24.9) {
        return grade[2];
    }
    if (imc >= 18.5) {
        return grade[1];
    }
    if (imc < 18.5) {
        return grade[0];
    }
}
