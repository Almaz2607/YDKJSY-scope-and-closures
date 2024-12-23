// -principle-of-least-exposure---
function diff(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    return y - x;
}

console.log(diff(5, 9));
// 4
console.log(diff(8, 2));
// 6

// -concealment-in-functional-scope--
var factorial = (function hideTheCache() {
    // intermediate scope in which cache is hidden
    var cache = {};

    function factorial(x) {
        if (x < 2) return 1;

        if (!(x in cache)) {
            cache[x] = x * factorial(x - 1);
        }
        return cache[x];
    }

    return factorial;
})();
// IIFE-Immediately Invoked Function Expression

console.log(factorial(6));
// 720
console.log(factorial(7));
// 5040

// -block-scope----------------------
// ---example-1----------------------
function getNextMonthStart(dateStr) {
    var nextMonth, year;

    {
        let curMonth;
        [, year, curMonth] = dateStr.match(/^(\d{4})-(\d{2})-\d{2}/) || [];
        nextMonth = (curMonth % 12) + 1;
    }

    if (nextMonth == 1) {
        year++;
    }

    return `${year}-${String(nextMonth).padStart(2, '0')}-01`;
}

console.log(getNextMonthStart('2019-12-25'));

// ---example-2------------------------
function sortNameByLength(names) {
    var buckets = [];

    for (let firstName of names) {
        if (buckets[firstName.length] == null) {
            buckets[firstName.length] = [];
        }
        buckets[firstName.length].push(firstName);
    }

    // block for narrowing scope
    {
        let sortedNames = [];

        for (let bucket of buckets) {
            if (bucket) {
                // each array is sorted alphabetically
                bucket.sort();
                // append sorted names to current list
                sortedNames = [...sortedNames, ...bucket];
            }
        }
        return sortedNames;
    }
}

console.log(
    sortNameByLength(['Sally', 'Suzy', 'Frank', 'John', 'Jennifer', 'Scott'])
);
// ['John','Suzy','Frank','Sally','Scott','Jennifer']

// FiB-function-in-block--------------------
if (true) {
    function ask() {
        console.log('Am I called?');
    }
}

if (true) {
    function ask() {
        console.log('Or what about me?');
    }
}

for (let i = 0; i < 5; i++) {
    function ask() {
        console.log('Or is it one of these');
    }
}

ask();

function ask() {
    console.log('Wait, maybe, It is this one?');
}
