/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let date = new Date()
    heureActuelle = date.getHours()
    minutesActuelles = date.getMinutes()
    if (heureActuelle>=18){
        document.getElementById("target").innerHTML = "Bonsoir"
    }
    if (heureActuelle==17){
        if(minutesActuelles>=30){
            document.getElementById("target").innerHTML = "Bonsoir"
        }
    }
    else{
        document.getElementById("target").innerHTML = "Bonjour"
    }
})();
