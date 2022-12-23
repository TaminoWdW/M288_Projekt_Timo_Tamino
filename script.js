const dropList = document.querySelectorAll("form select"),
    fromCurrency = document.querySelector(".ausgang select"),
    toCurrency = document.querySelector(".ziel select"),
    getButton = document.querySelector("form button"),

    seiteButton = document.querySelector(".begr2"),
    homeButton = document.querySelector("#homee");
// importieren die Formulare / den Button vom HTML

for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected = i == 0 ? currency_code == "CHF" ? "selected" : "" : currency_code == "EUR" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    //so funktioniert die DropListe
}

getButton.addEventListener("click", e => {
    00
    e.preventDefault();     //WAS MACHT DAS???

    getExchangeRate();              //  Macht das button reagiert  //

});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value; // temporäre währungscode in der "von" Liste
    fromCurrency.value = toCurrency.value; // passing TO currency code to FROM currency code
    toCurrency.value = tempCode; // passing temporary currency code to TO currency code

    //evt löschen (funktion entfernt)
    loadFlag(fromCurrency); // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of TO 


    getExchangeRate(); // getExchangeRate aufrufen
})
function getExchangeRate() {
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .umrechnungs-rate");
    let amountVal = amount.value;

    //falls feld leer / 0 drin -> automatisch 1
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    //Rechnet alles Um.
    //Rechnet alles Um.
    //Rechnet alles Um.

    exchangeRateTxt.innerText = "Umrechnungsrate wird geladen...";
    let url = `https://v6.exchangerate-api.com/v6/b61011d1b9311fc782bc1481/latest/${fromCurrency.value}`;
    //Umrechnungsseite (1500 Uses pro Monat)

    //Rechner

    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value]; // benutzer ZU Währungsrate bekommen
        let totalExRate = (amountVal * exchangeRate).toFixed(2); // Eingegenen Wert mit Users ZU Rate multiplitzieren
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;//Text ausgabe

    })
        .catch(() => { exchangeRateTxt.innerText = "Fehler, überprüfen sie Ihre Internetverbindung oder kontaktieren sie Tamino." }) //Falls Fehler passiert (oder kein Internet)
}
/*
var element1 = document.querySelector("#einstiegsseite")

function isInViewport(element1) {
    const rect = element1.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
*/

var myElement = document.getElementById('einstiegsseite');
var bounding = myElement.getBoundingClientRect();

if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

    console.log('Element is in the viewport!');
} else {

    console.log('Element is NOT in the viewport!');
    myElement.classList.remove("einstiegsseite")
    myElement.classList.add("unsichtbar");
}

homeButton.addEventListener("click", e => {
    myElement.classList.remove("unsichtbar");
    myElement.classList.add("einstiegsseite")
});

seiteButton.addEventListener("click", e => {
    myElement.classList.remove("einstiegsseite")
    myElement.classList.add("unsichtbar");
});










function myFunction()

{
    var un = document.forms ["myForm"]["Uname"].value;
    var pw = document.forms ["myForm"]["Pass"].value;
    if (un=="student" && pw=="1234")
    {
        window.location.href="rechner.html";
    }
    else
    {
        alert("Falsches Passwort oder falscher Name!");
    }
}


