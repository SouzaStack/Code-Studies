function caixinha() {
    alert("Você clicou no botão!");
    document.querySelectorAll("#teste")[2].style.background = "red";
    setTimeout(() => {
        document.querySelectorAll("#teste")[2].style.background = "blue";
    }, 5000);
}

document.querySelectorAll("#teste")[0].onclick = caixinha;

console.log(document.querySelectorAll("#teste"));

document.querySelector("#painel").innerHTML = JSON.stringify(document.querySelectorAll("#teste"));