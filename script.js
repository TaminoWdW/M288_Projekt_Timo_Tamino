const ausgangsW = document.querySelector(".ausgang select");
const zielW = document.querySelector(".ziel select");
const knopf = document.querySelector("form button");
const seiteButton = document.querySelector(".begr2");
const homeButton = document.querySelector("#homee");
const dropList = document.querySelectorAll("form select");
// importieren die Formulare / den Button vom HTML

for (let i = 0; i < dropList.length; i++) {
    Object.keys(alleWaehrungen).forEach(currency_code => {
        let waehrungen = "";
        if (i == 0) {
            if (currency_code == "CHF") {
                waehrungen = "selected";
            }
        } else {
            if (currency_code == "EUR") {
                waehrungen = "selected";
            }
        }
        let optionTag = `<option value="${currency_code}" ${waehrungen}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    })
    //so funktioniert die DropListe
}
knopf.onclick = function (event) {
    event.preventDefault();
    umrechnungRate();
}
const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.onclick = function () {
    let temp = ausgangsW.value; //temporäre währungscode in der "von" Liste
    ausgangsW.value = zielW.value;
    zielW.value = temp;

    umrechnungRate(); //abrufen
}
function umrechnungRate() {
    let eingabeWert = document.querySelector("form input").value;
    const ladeText = document.querySelector("form .umrechnungs-rate");
    let eingabeW = eingabeWert.value
    //falls feld leer / 0 drin -> automatisch 1
    if (eingabeWert == "") {
        eingabeWert.value = "1";
        eingabeWert = 1;
    } else if (eingabeWert == "0") {
        eingabeWert.value = "1";
        eingabeWert = 1;
    }
    //Rechnet alles Um.
    //Rechnet alles Um.
    //Rechnet alles Um.
    ladeText.innerText = "Umrechnungsrate wird geladen...";
    let url = `https://v6.exchangerate-api.com/v6/b61011d1b9311fc782bc1481/latest/${ausgangsW.value}`;
    //Umrechnungsseite (1500 Uses pro Monat)
    //Rechner
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let rate = data.conversion_rates[zielW.value];
            let total = (eingabeWert * rate).toFixed(2);
            ladeText.innerText = `${eingabeWert} ${ausgangsW.value} = ${total} ${zielW.value}`;
        })
};
// Extras
// Extras
// Extras
var einstieg = document.getElementById('einstiegsseite');

homeButton.addEventListener("click", e => {
    einstieg.classList.remove("unsichtbar");
    einstieg.classList.add("einstiegsseite")
});

seiteButton.addEventListener("click", e => {
    einstieg.classList.remove("einstiegsseite")
    einstieg.classList.add("unsichtbar");
});


//Loginsystem
//Loginsystem
//Loginsystem
function login() {
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if (un == "student" && pw == "1234") {
        window.location.href = "rechner.html";
    }
    else {
        alert("Falsches Passwort oder falscher Name!");
    }
}
