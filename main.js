/* fogjuk meg az azon nevezetű elemet */
const azonELEM = document.getElementById("azon");
const azonELEM2 = document.querySelector("#azon");
console.log(azonELEM); /*tipusa egy html elem */
console.log(azonELEM2); /*tipusa egy html elem */
console.log(typeof(azonELEM));

azonELEM.innerHTML = "Alakul a JS!";

const kartyaELEM = document.getElementsByClassName("kartya");
console.log(kartyaELEM); /* tipusa html collection, lista */

/* 2. kártyába akarok írni */
kartyaELEM[1].innerHTML = "Beleírtunk a második kártyába"

const kartyaELEM2 = document.querySelector(".kartya")
console.log(kartyaELEM2) /* az első ilyen html elemet kapjuk */

const kartyaELEM3 = document.querySelectorAll(".kartya")
console.log(kartyaELEM3) /* nodelist - lista */

/* 3. divet akarom elérni, írjunk bele valamit */

kartyaELEM3[3].innerHTML += "Hozzáírunk valamit"

/* fogjuk meg a button gombot */
const buttonELEM = document.querySelectorAll("button")[0]
console.log(buttonELEM);

/* kattintsunk rá a gombra, ráteszünk egy eseménykezelőt */
buttonELEM.addEventListener("click", gombrakattint);



function gombrakattint(){
    kartyaELEM[0].innerHTML += kartyaELEM3[3].innerHTML
}

