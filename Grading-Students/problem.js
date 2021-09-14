function gradingStudents(grades) {
    
    let getArr = []
    grades.map(e => {
        if (e < 38) getArr.push(e)
        else {
            let mod = e % 5
            if (mod == 0) {
                getArr.push(e)
            }
            else {
                let sum = e + (5 - mod)

                if ((sum - e) < 3) getArr.push(sum)
                else getArr.push(e)
            }
        }
    })
    return getArr
    
}