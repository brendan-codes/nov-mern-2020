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
// 🎈🎈🎈

// const maxNumberOfBallons = (text) => {
//     let newobj = {}
//     for (let i = 0; i < search.length; i++) {
//         newobj[search[i]] = 0
//     }
// }

const maxNumberOfBallons = (text, search) => {
    let newobj = {}
    for (let i = 0; i < search.length; i++) {
        newobj[search[i]] = 0
    }
    console.log(Object.keys(newobj))

    for (let j = 0; j < text.length; j++) {
        if (newobj.hasOwnProperty(text[j])) {
            newobj[text[j]] += 1
            console.log(text[j])
        }
    }
    console.log(newobj)
}
maxNumberOfBallons(text, "balloon")

