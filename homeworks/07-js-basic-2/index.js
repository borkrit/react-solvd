// task 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let initValue = 0
    let result = arr.reduce((acc,curr)=>{
            if(curr>0){
                return acc + curr
            }else{
                return acc
            }
        }
        ,initValue)
    return result
}
//end task 1

// task 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar){
    let result=[];
    let count =0
    for(let i=0; i<ar.length; i+=2){
        result.push(ar.slice(i,i+2))
    }

    result.forEach((item)=>{
        if(item.length == 2){
            let prev = item[0] - item[1]
            if(Math.abs(prev) == 1)count++
        }})
    return count;

};
//


//task 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound){
    let result;
    while(bound >=0 ){
        let calculated = bound/divisor
        if( Number.isInteger(calculated) && calculated > 0 ){
            return res = bound
        }else{
            bound --
        }

    }
}
//end task 3

// task 4 https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray){
    return numbersArray.filter(number=> number%2 === 0   )

}
//end task 4

// task 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr){
    let result=[]

    arr.sort((a,b)=>a-b);

    while(arr.length){
        if(arr.length){
            result.push(arr.pop())
        }
        if(arr.length){
            result.push(arr.shift())
        }
    }

    return result


};
// end task 5

// task 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
    if(string.length <= 1 || string.length >=100 ) return "invalid string";

    return [...string].filter((_,index)=> index%2)
}
// end task 6

// task 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme (triplet) {
    let resultItem = [...triplet].sort((a,b)=> a-b)[1];

    return triplet.indexOf(resultItem)

}
//end task 7

// task 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''),2)
};
// end task 8


//task 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    // do magic
    let objectWithDublicateItem ={};

    for(let i =0 ; i< arr.length;i++){
        if(objectWithDublicateItem[arr[i]]){
            objectWithDublicateItem[arr[i]] ++
        }else{
            objectWithDublicateItem[arr[i]] = 1
        }
    }
    let result =  Object.keys(objectWithDublicateItem).find((item)=>{
        if(objectWithDublicateItem[item] === 1  ) return item

    })
    return +result


}
//end task 9
// task 10
function decipherThis(message) {
    return message.split(' ').map(word => {
        const charCode = parseInt(word.match(/^\d+/)[0]);
        const firstLetter = String.fromCharCode(charCode);

        let restOfWord = word.slice(charCode.toString().length);

        if (restOfWord.length > 1) {
            restOfWord = restOfWord[restOfWord.length - 1] + restOfWord.slice(1, -1) + restOfWord[0];
        }

        return firstLetter + restOfWord;
    }).join(' ');
}

// end task 10

// task 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {

    const sorted = array.filter((item)=> item%2).sort((a,b)=>a-b);

    let indexItem =0

    return array.map(item=>item%2?sorted[indexItem++]:item)
}
// end task 11


// advanced https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
    const zeroArr = arr.filter((item)=> item === 0);
    const r = arr.filter((item)=> item !== 0);
    return [...r,...zeroArr]
}
//


