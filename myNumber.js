const btnGenerar = document.getElementById("check");
const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const resultado = document.getElementById("resultado");
const resultBlock = document.getElementById("result-block");

const numbers = [];
let num;

btnGenerar.addEventListener("click", () => {
    if (num) numbers.push(num);
    resultBlock.classList.remove("d-none");
    let newNum = Math.round(Math.random() * 100);

    // Comprobar que el numero no se haya generado antes
    while (numbers.includes(newNum)) {
        newNum = Math.round(Math.random() * 100);

        if (numbers.length > 99) {
            alert("No pude encontar el numero :(")
            break;
            window.location.reload();
        }
    }

    num = newNum;
    resultado.innerText = `Tu Número Es: ${num}`;
})

btnYes.addEventListener("click", () => alert(`Felicidades tu número es: ${num}`))
btnNo.addEventListener("click", () => btnGenerar.click());

