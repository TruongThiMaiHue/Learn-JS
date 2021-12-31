//1. twoSum : give an array and a target, find in array 2 el has sum = target 

var twoSum = (arr, target) => {
    let map = new Map
    for (let i in arr) {
        let num = target - arr[i]
        if (map.has(num)) {
            return [map.get(num), i]
        }
        map.set(arr[i], i)
    }
}
console.log(twoSum([-8,0,5,-7,9,2], 1))