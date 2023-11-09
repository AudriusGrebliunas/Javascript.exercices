/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("input", function () {
        let numberCheck = 0;
        let password = document.getElementById("pass-one").value;
        for (let char of password){
            if (!(isNaN(char))){
                numberCheck++;
            }
        }
        if (((document.getElementById("pass-one").value).length)>=8 && numberCheck>=2){
            console.log("ok")
            document.getElementById("validity").innerHTML = "ok"
        }
        else {
            document.getElementById("validity").innerHTML = "Pas ok"

        }
    })
})();
