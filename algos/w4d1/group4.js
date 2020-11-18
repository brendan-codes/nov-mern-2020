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
    var freqCounter = {};
    for (let i = 0; i < str.length; i++) {
        str[i] in freqCounter ?
        freqCounter[str[i]]++ :
        freqCounter[str[i]] = 1;
    }
    var odd = 0;
    for (const key in freqCounter) {
        if (freqCounter[key] % 2 == 1) {
            odd++;
        }
    }
    return odd > 1 ? false : true;
}