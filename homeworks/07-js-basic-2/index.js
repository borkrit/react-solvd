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
//end 4

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