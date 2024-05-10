// task 1  opposite http://www.codewars.com/kata/opposite-number

const opposite = number => number>0 ? -number: number

//end task 1

// task 2  opposite http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2){
    switch(operation){
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return  value1 * value2;
        case '/':
            return  value1 / value2;
        default:
            return 0;
    }

}
//end task 2

// task 3  https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array){
    return array.join(',')
}
// end task 3

// task 4 https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
    const costRent = 40;

    switch(d>0){
        case (d<3):
            return costRent*d;
        case (d<=6):
            return costRent*d-20;
        case (d>=7):
            return costRent*d-50;
        default:
            return 'error';
    }


}

// end task 4

// task 5 http://www.codewars.com/kata/calculating-with-functions

// end task 5

// task 6 https://www.codewars.com/kata/get-the-middle-character
function getMiddle(s)
{
    if (s.length == 1)  return s ;

    const middleIndex = Math.floor(s.length/2)
    if(s.length % 2 == 1){
        return s[middleIndex]
    }else{

        return s.slice(middleIndex-1,middleIndex+1)
    }
}
// end task 6


// task 7 http://www.codewars.com/kata/partition-on


//end task 7

//task 8 not found
//end task 8

//task 9 https://www.codewars.com/kata/find-the-odd-int/
//end task 9

// task 10 https://www.codewars.com/kata/find-the-parity-outlier

// task 11 https://www.codewars.com/kata/zipwith
function zipWith(fn,a0,a1) {
    let result =[]
    let length = Math.min(a0.length,a1.length)
    for(let i =0; i<length;i++){
        result.push(fn(a0[i],a1[i]) )
    }
    return result
}
// end task 11

// task 12    https://www.codewars.com/kata/filter-the-number

var filterString = function(value) {
    let result =  value.split('').filter((item)=> {
            return !isNaN(+item)
        }
    );
    return Number(result.join(''))
}
// end task 12

// task 13 https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
    if (n <= 0) {
        return "Invalid input.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return nthFibo(n - 1) + nthFibo(n - 2);
    }
}

// end task 13

// task 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/
// task 15 https://www.codewars.com/kata/duplicate-encoder
// task 16 https://www.codewars.com/kata/5693239fb761dc8670000001
// task 17  https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    // build here
    let result =[];
    let widthRow = nFloors*2-1;

    for(let i =0; i<nFloors ;i++){
        let calculate = i*2+1;
        let star = '*'.repeat(calculate);
        let space = ' '.repeat((widthRow - calculate )/2)
        result.push(space+star+space)
    }
    return result
}

// task 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str){
    let result =[];

    for(let i=0; i< str.length;i++){
        if(str[i] !== ' '){
            let letter = str[i].toUpperCase();
            result.push(str.slice(0,i)+letter+str.slice(i+1,str.length))
        }
    }
    return result

}
// end task 18

// task 19  https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string){
    let stringWithoutSpace = string.replace(/\s/g, '')

    let result =[]
    for(let i = 0; i<string.length;i+=n){

        result.push(stringWithoutSpace.slice(i,i+n))
    }
    return result.join('\n')
}
// end task 19
// task 20 https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url){
    //your code here
    let r = url.replace('https://','').replace('http://','').replace('www.','')

    return r.split('.')[0]
}
// end task 20

