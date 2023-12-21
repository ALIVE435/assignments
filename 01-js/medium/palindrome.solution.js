/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(st) {
    st=st.replace(/\s/g, "");
    st=st.toUpperCase();
    let length=Math.floor(st.length);
    let str="";
    for(let i=0;i<length;i++){
        if(st[i].toUpperCase()!==st[i].toLowerCase())str+=st[i];
    }
    //console.log(str);
    let ans=true;
    length=Math.floor(str.length/2);
    for(let i=0;i<length;i++){
      if(str[i]!==str[str.length-i-1])ans=false;
    }
    return ans;
  }
  
  module.exports = isPalindrome;
  