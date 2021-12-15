function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.criaBotoes();
      this.botaoEnter();
      this.pressionaBackSpace();
    },
    pressionaBackSpace() {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.apagaUm();
        }
      });
    },
    botaoEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.resultado();
        }
      });
    },

    resultado() {
      let conta = this.display.value;
      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    apagaTudo() {
      this.display.value = "";
    },

    criaBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-eq")) {
          this.resultado();
        }
        if (el.classList.contains("btn-clear")) {
          this.apagaTudo();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        this.display.focus();
      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calc = criaCalculadora();

calc.inicia();
