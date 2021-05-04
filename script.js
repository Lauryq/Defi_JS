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

function show_alert() {
    const nom = document.getElementById("nom").value;
    const lettres = /^[a-zA-Z]+$/;
    const autorise = nom.match(lettres);

    if (autorise) {
        alert("Formulaire envoyé")
    } else {
        document.getElementById('errorname').innerHTML="Veuillez entrer un nom valide";
    }
}
