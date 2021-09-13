function birthdayCakeCandles(candles) {

    let maxItem = candles[0], count = 0

    candles.map(e => { // 3 2 1 3
        if (maxItem < e) maxItem = e
    })
    candles.map(e => {
        if (e == maxItem) count++
    })
    let result = count
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}