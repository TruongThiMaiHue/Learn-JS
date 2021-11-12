///////////////ARRAY METHOD///////////////


////////////////EVERY////////////////////
Array.prototype.every2 = function (callback) {
    var output = true
    var arrLength = this.length
    for (var i = 0; i < arrLength; ++i) {
        var result = callback(this[i], i)
        if (result == false) {
            output = false
        }
    }
    return output
}
var array = [1, 3, 6, 9]
var newArray = array.every2(a => a>0)
console.log(newArray)
////////////////SOME////////////////////
Array.prototype.some2 = function (callback) {
    var output = false
    var arrLength = this.length
    for (var i = 0; i < arrLength; ++i) {
        var result = callback(this[i], i)
        if (result == true) {
            output = true
            break
        }
    }
    return output
}
var array = [1, 3, 6, 9]
var newArray = array.some2(a => a > 9)
console.log(newArray)

//////////////////MAP//////////////////////
Array.prototype.map2 = function (callback) {
    var output = []
    var arrLength = this.length
    for (var i = 0; i < arrLength; ++i) {
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}
var array = [1, 3, 6, 9]
var newArray = array.map2(a => a*a)
console.log(newArray)
////////////////FIND////////////////////
Array.prototype.find2 = function (callback) {
    var output = []
    var arrLength = this.length
    for (var i = 0; i < arrLength; ++i) {
        var result = callback(this[i], i)
        if (result == true) {
            output.push(this[i])
            break;
        }
    }
    return output
}
var array = [1, 3, 6, 9]
var newArray = array.find2(a => a>3)
console.log(newArray)
////////////////FILTER////////////////////
Array.prototype.filter2 = function (callback) {
    var output = []
    var arrLength = this.length
    for (var i = 0; i < arrLength; ++i) {
        var result = callback(this[i], i)
        if (result == true) {
            output.push(this[i])
        }
    }
    return output
}
var array = [1, 3, 6, 9]
var newArray = array.filter2(a => a>3)
console.log(newArray)