var arr = [];
var count = 1;
function writeNum(){
   arr.push(count)
    count  = count + 1
console.log(arr)
}

writeNum();




question 3
 //? Question 2:Multi dimensional Arrays
var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
//*print out these numbers (10,8,13,136 and 4)from the array provided above using for loop

var arr1 = arr[5][0][0];
var arr2 = arr[3];
var arr3 = arr[5][0][3][0];
var arr4 = arr[5][1];
var arr5 = arr[1][0];
var array = [arr1,arr2,arr3,arr4,arr5]
console.log(array);

var word = 'Generalization';
console.log(word.slice(3));

var fruit = ['orange', 'apple', 'guava', 'lemon'];
fruit.unshift('pea', 'banana');
fruit.push('avocado', 'Mango');
console.log(fruit);

var arr = [];
var count = 1;
function writeNum(){
 if(count % 3 === 0 && count % 5 === 0){
     arr.push('fizzBuzz')
  }
  else if(count % 3 === 0){
      arr.push('fizz')
 }
   else if(count % 5 === 0){
       arr.push('Buzz')
  }else{
   arr.push(count)} 
  count  = count + 1
console.log(arr)
}

writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();