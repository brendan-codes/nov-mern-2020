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


function canStrBecomePalindrome(str) {}

function canStrBecomePalindrome(str) {
    if (str.length==0){
        return false;
    }
    if (str.length==1){
        return true;
    }
    var arr = [];
    arr = str.split("");
    arr = arr.sort();
    var oddCounter = 0;
    for( var i = 0; i < arr.length; i=i+2){
        if (arr[i] != arr[i+1]){
            oddCounter++;
        }
    }
    if (oddCounter =1 || oddCounter == 0){
        return true;
    } else {
        return false;
    }
}