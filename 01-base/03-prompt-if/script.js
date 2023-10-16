/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let reponse = prompt("Voudriez-vous du gâteau?")
    while (reponse.toLowerCase() !== "oui" && reponse.toLowerCase() !== "non") {
        reponse = prompt("Voudriez-vous du gâteau?")
    }
    if (reponse.toLowerCase()=="non"){
        alert("Du gâteau, ça ne se refuse pas!")
    }
    else{
        alert(":-)")
    }

})();
