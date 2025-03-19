function bruteForceStringMatch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === m) {
            console.log(`Pattern found at index ${i}`);
        }
    }
}

bruteForceStringMatch("abxabcabcaby", "abc");