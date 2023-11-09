/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function(){
        if (document.getElementById("pass-one").value==document.getElementById("pass-two").value){
            document.getElementById("pass-one").style.border = "1px solid green"
            document.getElementById("pass-two").style.border = "1px solid green"

        }
        else{
            document.getElementById("pass-one").style.border = "1px solid red"
            document.getElementById("pass-two").style.border = "1px solid red"
        }
    })

})();
