// Chaldean numerical assignment for letters
const chaldeanValues = {
    'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
    'B': 2, 'K': 2, 'R': 2,
    'C': 3, 'G': 3, 'L': 3, 'S': 3,
    'D': 4, 'M': 4, 'T': 4,
    'E': 5, 'H': 5, 'N': 5, 'X': 5,
    'U': 6, 'V': 6, 'W': 6,
    'O': 7, 'Z': 7,
    'F': 8, 'P': 8
};

// total sum
// total sum single digit
// name split
const inputName = "Rejwan Ahamed Rahi"

const nameSplit = (userName) => {
    return userName.split(" ")
}

const inputtedName = nameSplit(inputName)

const nameRanking = (fullName) => {
    const suffixes = ["st", "nd", "rd"];
    for (let i = 1; i < fullName.length; i++) {
        const suffix = fullName.length % 10 < 4 ? suffixes[fullName.length % 10 - (fullName.length-i)] : "th";
        console.log(fullName + suffix)
    }
}

console.log(nameRanking(inputtedName))



// two digits to single digit function
const numberToSingleDigit = (digit) => {
    let sum = 0;
    const a = digit.toString().split("")
    for (digit of a) {
        sum += parseInt(digit)
    }
    let currentSum = sum;
    while (currentSum >= 10) {
        currentSum = numberToSingleDigit(currentSum);
    }
    return currentSum
}


