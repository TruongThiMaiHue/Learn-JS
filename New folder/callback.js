let coins = [
    {
        denom: 2000,
        quanity: 10
    },
    // {
    //     denom: 2000,
    //     quanity: 5
    // },
    // {
    //     denom: 5000,
    //     quanity: 1
    // }
]

function coin(coins, amount) {
    let num = 0
    let demon = []
    let quanity = []
    let x = coins.forEach(element => {
        let x = Object.values(element)
        demon.push(x[0])
        quanity.push(x[1])
    });
    function find() {
        let j = 0
        if (demon.length !== 0) {
        let maxDemon = 0
        let quanityDemon = 0
        for (let i in demon) {
            if (maxDemon < demon[i]) {
                maxDemon = demon[i]
                quanityDemon = quanity[i]
            } 
        }
        for (let i = quanityDemon; i > 0; --i) {
            if (i*maxDemon <= amount) {
                j = i
                amount = amount - i*maxDemon
                break
            }
        }
        num += j
        demon.splice(demon.indexOf(maxDemon), 1);
        quanity.splice(demon.indexOf(quanityDemon), 1);
        return find()
    } else {
        return 0
    }
    }
    find()
    if (amount === 0) {
        return num
    } else {
        return -1
    }
}
console.log(coin(coins, 3000))