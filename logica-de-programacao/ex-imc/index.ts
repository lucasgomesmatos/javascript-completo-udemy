const formSubmit = document.querySelector('.form') as HTMLFormElement;

function handleSubmit(event) {
  event.preventDefault();
  const inputWeight: number = Number(event.target.querySelector('#peso').value);
  const inputHeight: number = Number(event.target.querySelector('#altura').value);

  if (!inputWeight) {
    setResult("Peso inválido", false);
    return;
  }
  if (!inputHeight) {
    setResult("Altura inválido", false);
    return;
  };

  const imc: number = Number(getIMC(inputWeight, inputHeight));
  const msg = `Seu IMC é ${imc}. ` + getGradeIMC(imc);

  setResult(`${msg}`, true)
  console.log(imc)

}

function getIMC(weight: number, height: number) {
  return (weight / (height * height)).toFixed(2)
}

function setResult(msg: string, isValid: boolean) {
  const result: any = document.querySelector(".resultado");
  const paragraph = document.createElement('p');

  result.innerHTML = "";
  isValid ? paragraph.classList.add("paragrafo-resultado") : paragraph.classList.add("paragrafo-error")

  paragraph.innerHTML = msg
  result.appendChild(paragraph);

}

formSubmit?.addEventListener("submit", handleSubmit);

function getGradeIMC(imc) {
  const grade = [
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