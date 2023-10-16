/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let nombres=[]
        function carre(){
            for (let x=1; x <= 21; x++){
                if (x%2 == 0){
                    nombres.push(x*x)
                }
            }
        }
        carre();
        alert(`Voici les nombres : ${nombres}`)
    });
})();
