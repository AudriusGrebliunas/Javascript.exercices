/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {

document.getElementById("run").addEventListener("click", function () {


    for (let x = 1; x < 11; x++) {
        document.getElementById(`n-${x}`).innerHTML = (Math.floor(Math.random() * 10)) + 1;
    }

    let somme = 0

    for (let x = 1; x < 11; x++) {
        somme += (+document.getElementById(`n-${x}`).innerHTML)
    }

    document.getElementById("sum").innerHTML = somme;





    let moyenne = somme / 10

    document.getElementById("average").innerHTML = moyenne;




    let petitNombre = 10;

    for (let x = 1; x < 11; x++) {

        if (petitNombre > (+document.getElementById(`n-${x}`).innerHTML)) {
            petitNombre = (+document.getElementById(`n-${x}`).innerHTML)
        }

    }

    document.getElementById("min").innerHTML = petitNombre;


    let grandNombre = 0;

    for (let x = 1; x < 11; x++) {

        if (grandNombre < (+document.getElementById(`n-${x}`).innerHTML)) {
            grandNombre = (+document.getElementById(`n-${x}`).innerHTML)
        }

    }

    document.getElementById("max").innerHTML = grandNombre;


















})






// })();
