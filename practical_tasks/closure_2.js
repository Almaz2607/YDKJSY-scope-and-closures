// ---closure-task-2----------------------
function toggle(...vals) {
    var unset = {};
    var cur = unset;

    return function next() {
        if (cur != unset) {
            vals.push(cur);
        }

        cur = vals.shift();
        return cur;
    };
}

var hello = toggle('hello');
var onOff = toggle('on', 'off');
var speed = toggle('slow', 'medium', 'fast');

console.log(hello()); // hello
console.log(hello()); // hello

console.log(onOff()); // on
console.log(onOff()); // off
console.log(onOff()); // on

console.log(speed()); // slow
console.log(speed()); // medium
console.log(speed()); // fast
console.log(speed()); // slow
