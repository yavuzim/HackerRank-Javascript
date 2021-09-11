function miniMaxSum(arr) {

    let arrSum = 0

    arr.forEach(e => arrSum += e)

    let result = arr.map(e => arrSum - e)

    let maxValue = result[0], minValue = result[0]

    result.forEach(e => {
        if (e > maxValue) maxValue = e
        if (e < minValue) minValue = e
    })
    
    console.log(minValue,maxValue)

}