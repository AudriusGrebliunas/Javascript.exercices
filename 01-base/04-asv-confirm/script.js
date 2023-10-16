/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let age;
    let sexe;
    let ville;
    let confirmation;
    function questionnaire() {
        age = prompt("Veuillez choisir votre âge")        
        sexe = prompt("Veuillez choisir votre sexe")
        ville = prompt("Veuillez choisir votre ville")

        confirmation = prompt(`Âge = ${age}, sexe = ${sexe}, ville = ${ville}. Vous confirmez, oui ou non?`)
        while (confirmation.toLowerCase() !== "oui" && confirmation.toLowerCase() !== "non") {
            confirmation = prompt("Veuillez entrer oui ou non")
        }
    }
    
    questionnaire()
    if (confirmation.toLowerCase() == "oui") {
        alert(`Âge = ${age}, sexe = ${sexe}, ville = ${ville}`)
    }
    else{
        questionnaire()
    }

})();