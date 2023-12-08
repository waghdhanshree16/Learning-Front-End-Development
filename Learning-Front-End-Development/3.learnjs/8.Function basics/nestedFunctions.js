function addSquares(a, b) {
    const sa = square(a);
    const sb = square(b);

    function square(num) {
        return num * num;
    }
    return sa + sb;
}
console.log(addSquares(3, 4));


// let a = 2
// let b = 3

// sqr1 = a * a
// sqr2 = b * b

// // console.log(sqr1)
// // console.log(sqr2)

// addSquares = sqr1 + sqr2
// console.log(addSquares)