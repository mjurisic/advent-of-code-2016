var rl = require('readline').createInterface({
    terminal: false, input: require('fs').createReadStream('./day1/input')
});

var or = 0; //0 is n, 1e, 2s, 3w
var posx = 0;
var posy = 0;

rl.on('line', function (line){
    var elems = 'R8, R4, R4, R8'.split(', ');
    elems.forEach(function (el){
        var blocks = Number(el.substring(1));

        changeDir(el[0]);

        if (or == 0) {
            posy += blocks;
        } else if (or == 1) {
            posx += blocks;
        } else if (or == 2) {
            posy -= blocks;
        } else if (or == 3) {
            posx -= blocks;
        }
    });
    var res = Math.abs(posx) + Math.abs(posy);
    console.log('End position:', posx + ',' + posy);
    console.log('Distance:', res);
});

function changeDir(newDir){
    if (newDir == 'L') {
        or--;
    } else {
        or++;
    }

    if (or < 0) {
        or = 3;
    } else if (or > 3) {
        or = 0;
    }
}