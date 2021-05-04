var count = 0;

const test = document.querySelector(".test");

test.addEventListener("click", function () {
if (count % 2 == 0) {
test.style.background = "yellow";
count++;
} else {
test.style.background = "green";
count++;
}
if (count % 5 == 0) {
test.style.background = "red";
}
console.log(count);
});

function envoyer() {
    const nom = document.getElementById("nom").value;
    const lettres = /^[a-zA-Zä-ÿÄ-ÿ]+$/;
    const autorise = nom.match(lettres);
    const message = document.getElementById('message')

    if (autorise) {
        document.getElementById('nom').style.border = "2px solid green";
        message.innerHTML="Formulaire validée";
        
    } else {
        message.innerHTML="Veuillez entrer un nom valide";
        document.getElementById('nom').style.border = "2px solid red";  
    }
}

