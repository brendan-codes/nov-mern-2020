// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar"
// "tacocat"

// "baba" => true
// "baab"


// "bcda" => false
// "abcd"


function canStrBecomePalindrome(str) {
    let freq = {};
    return [...str].filter(char => {
        //returning true or false based on if it's the first value of each character in the string array
        //we do this to populate the array with the frequency table keys so we can just call foreach on the array
        //assigning the frequency table value at that character to be 1 if it doesn't exist, or incrementing it if it does
        //also assigning the return value to be false if the value exists, true if it doesn't
        freq[char], returnVal = freq[char] ? (freq[char] = freq[char] + 1, returnVal = false) : (freq[char] = 1, returnVal = true);
        return returnVal;
    }).filter(char => freq[char] % 2 == 1).length <= 1;
    // returning true on the final filter if there is an odd amount of characters
    // then checking if the length of the final array is less than or equal to 1 because that is how palindromes work
}

function canStrBecomePalindrome2(str) {
    let freq = {}, oddCount = 0;
    [...str].forEach(char => {
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    });
    Object.keys(freq).forEach(key => {
        if (freq[key] % 2 == 1)
            oddCount++;
    });
    return oddCount <= 1;
}

console.log(canStrBecomePalindrome("baba"))