//  Pivot là phần tử cuối mảng

const quickSort = (arr) => {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let pivotIndex = arr.length-1
    let pivot = arr[pivotIndex]
    for(let i of arr.splice(0, pivotIndex)) {
        if (i < pivot) {
            left.push(i)
        } else {
            right.push(i)
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

//  Pivot là phần tử đầu mảng

const quickSort = (arr) => {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let pivotIndex = 0
    let pivot = arr[pivotIndex]
    for(let i = arr.length-1; i > 0; --i) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort([3,6,9,0,2,4]))