function min(a, b) {
    console.log(arguments);
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(min(35, 32, 76, 6));

function max(c, d) {
    console.log(arguments);
    if (c >= d) {
        return c;
    }
    else {
        return d;
    }
}
console.log(max(3, 12));

function selfCount() {
    var counter = 0;

    function countIncrement() {
        counter++;
        console.log(counter);
    }
    return countIncrement;
}
var myFun = selfCount();
var myFun2 = selfCount();
myFun();
myFun();
myFun2();