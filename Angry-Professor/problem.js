
function angryProfessor(k, a) {
    // Write your code here
    let count = 0, status

    a.map(e => {
        if (e <= 0) count++
    })

    if (count < k) status = "YES"
    else if (count >= k) status = "NO"

    return status


    function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

        const t = parseInt(readLine().trim(), 10);

        for (let tItr = 0; tItr < t; tItr++) {
            const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

            const n = parseInt(firstMultipleInput[0], 10);

            const k = parseInt(firstMultipleInput[1], 10);

            const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

            const result = angryProfessor(k, a);

            ws.write(result + '\n');
        }

        ws.end();
    }
