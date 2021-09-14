function timeInWords(h, m) {
    // Write your code here

    let clock
    let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
        "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", ",thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"]
    if (m == 0) clock = `${numbers[h - 1]} o' clock`
    if (m == 1) clock = `${numbers[m - 1]} minute past ${numbers[h - 1]}`
    if ((m > 1 && m < 15) || (m >= 16 && m < 30)) clock = `${numbers[m - 1]} minutes past ${numbers[h - 1]}`
    if (m == 15) clock = `quarter past ${numbers[h - 1]}`
    if (m == 30) clock = `half past ${numbers[h - 1]}`
    if (((m >= 40 && m < 45) || (m > 30 && m < 40)) || m > 45) {
        let minute = 60 - m // 13
        clock = `${numbers[minute - 1]} minutes to ${numbers[h]}`
    }
    if (m == 45) clock = `quarter to ${numbers[h]}`

    return clock
}