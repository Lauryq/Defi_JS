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
    var nom = document.getElementById('nom').value; 
    alert("Bonjour " + nom +"!");
}

