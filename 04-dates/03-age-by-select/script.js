/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calculate_age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return age_dt.getUTCFullYear() - 1970;
}

let year;
let month;
let day;

document.getElementById("run").addEventListener("click", function () {
    year = document.getElementById("dob-year").value
    month = document.getElementById("dob-month").value
    day = document.getElementById("dob-day").value
})

document.getElementById("run").addEventListener("click", function () {
    alert(calculate_age(new Date(year, month, day)))
})

