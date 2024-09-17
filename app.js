


///// masala 01
// let arr = [1,2,6,7]

// let target = 9
// let result = []
// for(let i = 0; i < arr.length; i++){
//     for(let g = 0; g < i; g++){
//         if((arr[i] + arr[g]) === target){
//             result.push(arr[i],arr[g])
//         }
//     }
// }
// console.log(result)



///// masala 02
// let arr = [1,2,3,5,6,1,2,3]
// let result = []
// for(let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i])
//     }
// }
// console.log(result);



///// masala 03
// function getLevel(n){
//     let result = []
//     for(let i = 1; i <= n; i++){
//         result.push(2 ** i)
//     }
//     return result
// }   
// console.log(getLevel(4));


///// masala 04
// const arrFunction = num =>{
//     let sum = 0
//     for(let i = 1; i <= num; i++){
//         sum += i
//     }
//     console.log(sum);
//     return sum
// }
// arrFunction(+prompt('son kiriting'))



///// masala 05
// const arr = (...num) => {
//     let allsum = num.reduce((a,b) => a+b)
//     return Array.from(String(allsum),Number)    
// }

// console.log(arr(1,26,3));



///// masala 06
// Kiritilgan so’z yoki sonni palindrome yoki palindrome emasligini aniqlab beradigan
//  function yarating argument string yoki number ligini tekshiring
///// USTOZDAN SO'RSASH KERAK


///// masala 07
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// }
// let objValue = Object.values(obj).reduce((a,b) => a + b)
// let result = objValue.toString().split('').reduce((a,b)=> a + Number(b),0) ///// bu yerda  stringni Number qildik 
// console.log(objValue,result);


///// masala 08
// function unliTop(soz) {
//     let unli = "aeiouAEIUO"
//     let count = 0
//     for(let i of soz){
//         if (unli.includes(i)) {
//             count++    
//             console.log(count,i);
//         }
//     }
// }

// unliTop('Assalomu aleykum ustoz')



///// masala 09
// function getInitialOdds(n) {
//     let toq = []; 
//     for (let i = 0; i < n; i++) {
//         toq.push(2 * i + 1); 
//     }
//     return toq;
// }


// console.log(getInitialOdds(4)); 


///// masala 10


// {
// let arr = [1,2,3,5,6,1,2,3]
// console.log(arr);
// let result = []
// for(let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i])
//     }
// }
// console.log(result);
// }