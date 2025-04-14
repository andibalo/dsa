
/*
https://leetcode.com/problems/group-anagrams/description/
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

/*
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 1. Use array of size 26 to represent alpabet because input is (a-z). Use it to count the frequency of letters in each word. Use CHARCODE to map alphabet to index in the array.
// 2. Use the frequency + letter calculated in step 1 as key to group the anagrams in a map

// Big O = O(M.N) where M is the length of each word (str) and N is the length of input array (strs) 
var groupAnagrams = function(strs) {
    const groupedAnagram = []
    const anagramGroupMap = {}

    strs.forEach(str => {
            const count = new Array(26).fill(0);
            var anagramGroupMapKey = ""

            for(let i = 0; i < str.length; i++) {
                const charIndexInArray = str.charCodeAt(i) - 97
                count[charIndexInArray]++
            }

            count.forEach((item,index) => {
                if(item > 0){
                    anagramGroupMapKey += item + String.fromCharCode(index + 97)
                }
            })

            if(anagramGroupMap[anagramGroupMapKey] !== undefined) {
                anagramGroupMap[anagramGroupMapKey] = [str, ...anagramGroupMap[anagramGroupMapKey]]
            } else {
                anagramGroupMap[anagramGroupMapKey] = [str]
            }
        }
    )

    for (const key in anagramGroupMap) {
        groupedAnagram.push(anagramGroupMap[key])
    }

    return groupedAnagram
};