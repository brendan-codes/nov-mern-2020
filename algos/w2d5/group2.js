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


const maxNumberOfBallons = (text, word) => {
    const max_instances = Math.floor(text.length / word.length);
    // console.log(text.match(/a/g));
    // ['a', 'a']

    let letterObj = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };
    for (let i = 0; i < text.length; i++) {
        if (text[i] in letterObj) {
            letterObj[text[i]] += 1;
        } else {
            continue;
        }
    }
    console.log(letterObj);
}