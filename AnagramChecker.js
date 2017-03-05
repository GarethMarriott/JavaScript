"use strict"


let AnagramChecker = function (first , second){

  if (first.length != second.length) {
    return false
  }
  let anagram = true
  let arr1 = first.split('').sort()
  let arr2 = second.split('').sort()
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]){
      return false;
    }
  }
  return true
}


exports.Checker = AnagramChecker
//console.log(AnagramChecker("ello" , "ello"))
