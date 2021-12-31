/*1.UCLN in Array: Given an integer array, return the greatest common divisor 
of the smallest number and largest number in array.*/

var findGCD = function(arr) {

    let max = 0, min = arr[0]

    for (let i = 0; i<arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i]
        }
    }
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]<min) {
            min = arr[i]
        }
    }    
    let a = min
    let Ua = []
    for (let i = 1; i <= a; ++i) {
        if (a%i==0) {
            Ua.push(i)
        }
    }
    let b = max
    let Ub = []
    for (let i = 1; i <= b; ++i) {
        if (b%i==0) {
            Ub.push(i)
        }
    }
    let res = []
    for (let i of Ub) {
        for(let j of Ua) {
            if (i === j) {
                res.push(i)
            }
        }
    }
    return res[res.length-1]
    }
    console.log(findGCD([6,10,5,5]))