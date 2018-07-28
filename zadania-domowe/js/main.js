
function reverseStr(str){
   var splitStr = str.split("");
   var arrayStr = splitStr.reverse();
   var joinStr = arrayStr.join("");
   return joinStr;
}

console.log(reverseStr("Akademia108"));
