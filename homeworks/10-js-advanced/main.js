// // task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
// function validateMessage(msg) {
//     if(typeof msg !== 'string' && msg === null){
//         throw new ReferenceError(`Message is null!`)
//     }
//     if(typeof msg !== 'string'){
//         throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`)
//     }
//     if(msg.length>255 || msg.length == 0){
//         throw new RangeError(`Message contains ${msg.length} characters!`)
//     }
//     if((/<[^>]+>/).test(msg)){
//
//         return false
//     }
//
//     return true;
//
// }
// // end task 1
//
// // task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076/
// async function sayJoke(apiUrl, jokeId){
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//
//     if (!data.jokes) {
//         throw new Error(`No jokes at url: ${apiUrl}`);
//     }
//
//     const joke = data.jokes.find(j => j.id === jokeId);
//
//     if (!joke) {
//         throw new Error(`No jokes found id: ${jokeId}`);
//     }
//
//     return {
//         saySetup: () => joke.setup,
//         sayPunchLine: () => joke.punchLine,
//     };
// }
//

// end task 2



// task 5
const container = document.querySelector('.container');
const actionButtons = document.querySelectorAll('button');
const requestURL = 'https://randomuser.me/api/?gender=female&results=10';

async function fetchRequest(url) {
    const data = await fetch(url, {
        method: "GET"
    }).then((req) => req.json())

    data['results'].forEach((item) => {
        let person = createPerson(item)
        container.append(person)

    })
};
actionButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const typeRequest = e.target.getAttribute('data-type-request')

         switch  (typeRequest) {
            case 'xml':
                const XHR = new XMLHttpRequest();

                XHR.open('GET', requestURL);
                XHR.send()

                XHR.onreadystatechange = function () {
                    if (this.status === 200 && this.readyState === 4) {
                        let r = JSON.parse(XHR.responseText);
                        console.log(r['results'])
                        r['results'].forEach((item) => {
                            let person = createPerson(item)
                            container.append(person)

                        })
                    }
                }
                break;
            case 'fetch':
                fetchRequest(requestURL)
                break;
            default:
                throw new Error('Ops, not found method ')
        }

    })
})


function createPerson(item) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

    div.append(img)
    div.append(title)
    img.src = item['picture']['large']
    title.innerText = item['name']['first'] + ' ' + item['name']['last']

    return div
}
// end task 5

// task 3
let sec = 1
let curr = new Date();
let star = curr.getTime()
let timer = setInterval(() => {
    console.log('Elapsed time:', sec);

    console.log(new Date().getTime() - star)
    sec++
}, 1000)

setTimeout(() => {
    clearTimeout(timer);
}, 5000)

//end task 3

// task 6
function checkDigitString(str) {
    if ((/[0-9]$/).test(str[0])) {
        return 'string digit'
    } else {
        return 'string not digit'
    }
}

let testString = '2wewewewwew';
let testString1 = 'wewewewwew';

console.log(checkDigitString(testString))
console.log(checkDigitString(testString1))


    //end task 6

    //end task 7
function checkPhoneNumber(str) {
    if ( (/[+48]-[0-9]{4}-[0-9]{4}-[0-9]{4}$/).test(str)) {
        return 'Corrected Poland number'
    } else {
        return 'Incorrect Poland number'
    }


}
let correctPhone = '+48-2222-2222-2222';
let incorrectPhone = '3333-33212-3212-3';

console.log(checkPhoneNumber(correctPhone))
console.log(checkPhoneNumber(incorrectPhone))

    //end task 6

