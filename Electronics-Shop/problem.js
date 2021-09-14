function getMoneySpent(keyboards, drives, b) {
    
    let getValue = []
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j]
            if (sum < b || sum == b) getValue.push(sum)
            else getValue.push(-1)
        }
    }

    let maxMavlue = getValue[0]

    getValue.map(e => {
        if (maxMavlue < e) maxMavlue = e
    })

    return maxMavlue

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b, n, m);

    ws.write(moneySpent + "\n");

    ws.end();
}