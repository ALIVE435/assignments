/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(Str1, Str2) {
    let str1=Str1.toUpperCase();
    let str2=Str2.toUpperCase();
    let obj1 = new Object();
    let obj2 = new Object();
    
    for (let i = 0; i < str1.length; i++) {
        if (obj1.hasOwnProperty(str1[i]) === false) obj1[str1[i]] = 1;
        else obj1[str1[i]] = obj1[str1[i]] + 1;
    }
  
    for (let i = 0; i < str2.length; i++) {
        if (obj2.hasOwnProperty(str2[i]) === false) obj2[str2[i]] = 1;
        else obj2[str2[i]] = obj2[str2[i]] + 1;
    }
  
    let obj1_keys = Object.keys(obj1).length;
    let obj2_keys = Object.keys(obj2).length;
  
    if (obj1_keys === obj2_keys) {
        let flag = true;
        for (let key1 in obj1) {
            for (let key2 in obj2) {
                if (key1 === key2) {
                    if (obj1[key1] !== obj2[key2]) flag = false;
                }
            }
        }
        return flag;
    } else {
        return false;
    }
}
//let a=isAnagram("vasvd","fwfa");
//console.log(a);
module.exports = isAnagram;
  