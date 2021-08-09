function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let fallsApple=[],fallsOrange=[],appleCunt=0,orangeCount=0;
    
    apples.map(e=>{
        fallsApple.push(a+e);
    })
    oranges.map(e=>{
        fallsOrange.push(b+e)
    })
    fallsApple.forEach(x=>{
        if(x>=s && x<=t) appleCunt++
    })
    fallsOrange.forEach(x=>{
        if(x>=s && x<=t) orangeCount++
    })
    console.log(appleCunt)
    console.log(orangeCount)

}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
