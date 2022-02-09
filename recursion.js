/** product: calculate the product of an array of numbers. */

function product(nums) {
  return !nums.length? 1: nums.shift() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  return !words.length? 0: Math.max(words.shift().length, longest(words));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
    if(!str.length) return '';
    return str[0] + everyOther(str.substring(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) { 
  if(!str.length || str.length === 1) return true;
  let arr = [...str]
  return arr.shift() != arr.pop()? false: isPalindrome(arr.join(''));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(!arr.length) return -5;
  return arr[0] != val? 1 + findIndex(arr.slice(1), val): 0;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 1) return str;
  let arr   = [...str];
  let ch    = arr.pop();
  return ch + revString(arr.join(''));

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
