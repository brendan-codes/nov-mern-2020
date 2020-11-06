/**1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */
const maxNumberOfWord = (text, search) => {
    let freqTable = {};
    for (let i = 0; i < text.length; i++) {
        freqTable[text[i]] = freqTable[text[i]] ? freqTable[text[i]] + 1 : 1;
    }
    let isThere = true;
    let maxCount = Infinity;
    for (let i = 0; i < search.length; i++) {
        if (!freqTable[search[i]]) {
            isThere = false;
            break;
        } else if (maxCount > freqTable[search[i]]) {
            maxCount = freqTable[search[i]];
        }
    }
    if (isThere)
        console.log(maxCount);
}

maxNumberOfWord("loonbalxballpoonbaelaponernnaeo", "balloon")





let worddic = {};
let chardic = {};
const maxNumberOfBallons = (text, word) => {
    for (let i = 0; i < word.length; i++) {
        // console.log(i);
        var char1 = word[i];
        if (worddic[char1]) {
            worddic[char1]++;
        }
        else { worddic[char1] = 1 }
    }
    let isThere = true;
    let maxCount = Infinity;
    for (let i = 0; i < search.length; i++) {
        if (!freqTable[search[i]]) {
            isThere = false;
            break;
        } else if (maxCount > freqTable[search[i]]) {
            maxCount = freqTable[search[i]];
        }
    }
    if (isThere)
        console.log(maxCount);
    // console.log(worddic)
    // return worddic;
    // for (let j = 0; j < text.length; J++) {
    //     var char2 = text[j];
    //     if (chardic[char2]) {
    //         chardic[char2]++;
}
             else { chardic[char2] = 1 }
         }
     }

         }

console.log(maxNumberOfBallons("loonbalxballpoon", "balloon"))