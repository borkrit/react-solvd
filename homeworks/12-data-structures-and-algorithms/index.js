const fs = require('fs');
const data  = require('./MOCK_DATA')

const { performance } = require('perf_hooks');


const needleList = [
    'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
    '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
    '3c511860-d159-457d-8374-e8205904e6f5',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
    'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
    '3c511860-d159-457d-8374-e8205904e6f5',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
    'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
    '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
    '1e63459f-0b18-4acf-9afc-e7287347bbeb',
];

const sorted = [...data].sort((a,b)=>{
    return  a.sku.localeCompare(b.sku) ;
})


function linearSearch(dataList, target){
    for(let i = 0;i<data.length;i++){
        if(data[i]['sku'] === target ){
            return data[i]
        }
    }
    return null
}

function binarySearch(dataList,target){
    let left = 0;
    let right = dataList.length-1;
    let middle;

    while(right >= left){
        middle =  Math.floor((left+right)/2);

        if(dataList[middle].sku === target) {
            return dataList[middle];
        }

        if(dataList[middle].sku > target){
            right = middle -1
        }else{
            left = middle+1;
        }
    }
    return -1;

}

function performanceTest (searchFunction,dataList,searchList){
    let start = performance.now()

    searchList.forEach((item)=> searchFunction(dataList,item))
    let end = performance.now();

    return end-start;


}

const linearTest = performanceTest(linearSearch,data,needleList);
const binaryTest = performanceTest(binarySearch,sorted,needleList);

console.log(`linear algorithm completed ${linearTest}ms\nbinary algorithm completed ${binaryTest}ms\n`)

fs.writeFile('result.log',`linear algorithm completed ${linearTest}ms\nbinary algorithm completed ${binaryTest}ms\n`,function (err) {
    if (err) throw err;
    console.log('Saved!');
})