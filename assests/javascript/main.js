/**
 * @desc It return the reverse of string that separate by digit
 * @param {*} str
 * @returns  reserve string
 */
const reverseWords = (str) => {
    if (str.constructor.name == "string" && str.length == 0) return str;
    const arr = str.split("");
    const num = arr.filter((item) => Number(item));

    const length = num.length;
    if (length === 0 && str.length > 0) {
        return str.split("").reverse().join("");
    }
    var sort_part = "";
    for (let index in num) {
        let [arr1, ...rest] = str.split(num[index]);
        sort_part += arr1.toString().split("").reverse().join("") + num[index];
        if (length === Number(index) + 1) {
            sort_part += rest.toString().split("").reverse().join("");
        }
        str = rest.toString();
    }

    return sort_part;
};
console.log(reverseWords("asts7hg8jsgtred7lyaass"));
console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f
