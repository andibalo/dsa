function validAnagram(str, str2) {
    if (str.length != str2.length) {
        console.log(false)
        return
    }

    let str1LetterToOccurenceMap = {}
    let str2LetterToOccurenceMap = {}

    for (const s of str) {
        if (str1LetterToOccurenceMap.hasOwnProperty(s)) {
            str1LetterToOccurenceMap[s] += 1
        } else {
            str1LetterToOccurenceMap[s] = 1
        }
    }


    for (const s2 of str2) {
        if (str2LetterToOccurenceMap.hasOwnProperty(s2)) {
            str2LetterToOccurenceMap[s2] += 1
        } else {
            str2LetterToOccurenceMap[s2] = 1
        }
    }

    for (const s in str1LetterToOccurenceMap) {
        if (!str2LetterToOccurenceMap.hasOwnProperty(s)) {
            console.log(false)
            return
        }

        if (str2LetterToOccurenceMap[s] != str1LetterToOccurenceMap[s]) {
            console.log(false)
            return
        }

    }

    console.log(true)
    return
}


// Solution 2
function validAnagram2(str, str2) {
    if (str.length != str2.length) {
        console.log(false)
        return
    }

    let str1LetterToOccurenceMap = {}

    for (const s of str) {
        if (str1LetterToOccurenceMap.hasOwnProperty(s)) {
            str1LetterToOccurenceMap[s] += 1
        } else {
            str1LetterToOccurenceMap[s] = 1
        }
    }


    for (const s2 of str2) {
        if (!str2LetterToOccurenceMap.hasOwnProperty(s2) || str2LetterToOccurenceMap[s2] == 0) {
            console.log(false)
            return
        } else {
            str1LetterToOccurenceMap[s2] -= 1
        }
    }


    console.log(true)
    return
}


// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat", "car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

validAnagram2('', '') // true
validAnagram2('aaz', 'zza') // false
validAnagram2('anagram', 'nagaram') // true
validAnagram2("rat", "car") // false) // false
validAnagram2('awesome', 'awesom') // false
validAnagram2('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram2('qwerty', 'qeywrt') // true
validAnagram2('texttwisttime', 'timetwisttext') // true