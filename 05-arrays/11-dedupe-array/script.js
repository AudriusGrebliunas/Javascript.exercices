/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];


    document.getElementById("run").addEventListener("click", function () {
        let x = 0;
        let fruitDoublon
        while (x < fruits.length) {
            fruitDoublon = fruits[x]
            for (let y = x + 1; y < fruits.length; y++) {
                if (fruitDoublon == fruits[y]) {
                    fruits.splice(y, 1)
                }
            }
            x++
        }
        console.log(fruits)
    })


 })();
