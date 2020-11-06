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

const maxNumberOfBallons = (text) => {
    let obj = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    }

    for (var i = 0; i < text.length; i++) {
        if (obj[text[i]]) {
            obj[text[i]]++;
        }
    }


    let temp = ""
    let count = 0;
    while (obj[0] != 0) {
        for (let key in obj) {
            if ((key == 'l' || key == 'o')) {
                obj[key] -= 2;
            } else {
                obj[key]--
            }
        }
        let tA1 = obj.values().filter(val => val < 0);
        if (tA1.length > 0) {
            break;
        } else {
            count++;
        }
    }

    return count;
}
