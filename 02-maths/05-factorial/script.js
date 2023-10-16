/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", () => {
        let factorielle = document.getElementById("number").value
        let x = (factorielle-1)
        if(factorielle<0){
            alert("Veuillez entrer un nombre positif")
        }
        else{
        while(x>0){
            factorielle = factorielle * x
            x=x-1;
        }
        alert(factorielle)
    }
    });
})();
