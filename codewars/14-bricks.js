/*
UZDUOTIS:
- gaunam, kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena (metrais)
- sienos neturi angu ir/ar skyliu
- gaunam sienos auksti, kuris visur yra vienodas
- turim plytos dydi (aukstis ir plotis) (metrais)
- reikia suzinoti, keliu plytu mums reikes, jei plytu skaldyti negalima
*/

function bricks(wallsWidth, wallsHeight, bricksHeight, bricksWidth) {
    let bendrasPlotis = 0

    for (let i = 0; i < wallsWidth.length; i++) {
        bendrasPlotis += wallsWidth[i]
   
    }

    const plytuAukstyje = Math.ceil(wallsHeight / bricksHeight); 
    const plytuPlotyje = Math.ceil(bendrasPlotis / bricksWidth);
    
    const plytuKiekis = plytuPlotyje * plytuAukstyje
    return plytuKiekis;

   
}


console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);
console.log(bricks([1], 1, 0.1, 0.2), '->', 50);
console.log(bricks([1.05], 1.05, 0.1, 0.2), '->', 66);



