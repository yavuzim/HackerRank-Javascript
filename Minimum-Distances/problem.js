function minimumDistances(a) {
    
    let arr = []

    for (let i = 0; i < a.length; i++) { 
        let difIndex = 0, count = 0
        for (let j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                count++
                difIndex = Math.abs(difIndex - j)
            }
        }
        if (count >= 2) arr.push(difIndex)
    }

    let minValue = arr[0]
    arr.length <= 0 ? minValue = -1 : arr.map(e => {
        if (e < minValue) minValue = e
    })

    return minValue
}