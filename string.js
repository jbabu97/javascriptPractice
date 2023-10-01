const myStr = 'I live in Bangladesh';

console.log(myStr.length);
// with the length method we can know how many characters are in the varieble 

console.log(myStr.charAt(7));
// with the charAt method we can find certain index positions character inside the varieble 

console.log(myStr.indexOf('B'));
// with the indexOf method we can find certain character's  index position inside the varieble 

console.log(myStr.endsWith('desh'));
// with the endsWith method we can know which word or characters are at the end of the string varieble

const myStr2 = 'I like my country very much';

console.log(myStr2.replace('like', 'love'));
// with the replace method we can replace any character or word in the string varieble

console.log(myStr2.toUpperCase());
console.log(myStr2.toLowerCase());
// with toUpperCase and toLowerCase with can convert lower case to upper case and upper case to lower case

console.log(myStr.concat("." + " " + myStr2));
//  with concat method we can add two or more variebles 