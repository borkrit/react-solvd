
const user1 = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};
const randomValue = Math.random();
const nullValue = null;

function pluck(obj,key){
    if(typeof obj !== "object" ||  obj == null ) return null;

    const keyProperty = key.split('.')

    let value = structuredClone(obj);

    for (const keyElement of keyProperty) {

        if(!value.hasOwnProperty(keyElement)) return null;
        value=value[keyElement]
    }

    return value

}


console.log(pluck(user1,'preferences.sound.value' )); // 30
console.log(pluck(user1, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2
const user2 = {
    username: 'testuser1',
    preferences: {
        sound: {
            maxValue: 50,
            value: 30,
        },
    },
};

function clone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let cloneObj;

    if (Array.isArray(obj)) {
        cloneObj = [];
        for (let i = 0; i < obj.length; i++) {
            cloneObj[i] = clone(obj[i]);
        }
        return cloneObj;
    }

    cloneObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = clone(obj[key]);
        }
    }
    return cloneObj;
}


const clonedUser = clone(user2);
clonedUser.preferences.sound.maxValue = 70;
console.log(
    user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);

//task 3

const  moment = require('moment')

function offset(momentDate) {
    const now = moment();
    const diffYears = now.diff(momentDate, 'years');
    const diffDays = now.diff(momentDate, 'days');
    const diffHours = now.diff(momentDate, 'hours') % 24;
    const diffMinutes = now.diff(momentDate, 'minutes') % 60;

    if (diffYears >= 1) {
        const pluralYears = diffYears > 1 ? 'years' : 'year';
        return `${diffYears} ${pluralYears} ago`;
    } else if (diffDays >= 1) {
        const pluralDays = diffDays > 1 ? 'days' : 'day';
        return `${diffDays} ${pluralDays} ago`;
    } else if (diffHours >= 1) {
        const pluralHours = diffHours > 1 ? 'hours' : 'hour';
        return `${diffHours} ${pluralHours} ${diffMinutes} minutes ago`;
    } else return `${diffMinutes} minutes ago`;

}

console.log(offset(moment('23/02/2024 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));


// task 4
function randomDate(date1, date2) {
    const timestamp1 = date1.valueOf();
    const timestamp2 = date2.valueOf();

    const randomTimestamp = timestamp1 + Math.random() * (timestamp2 - timestamp1);

    return moment(randomTimestamp);
}

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

console.log(randomDate(date1, date2).format('DD/MM/YY'));

//task 5 https://www.codewars.com/kata/596cf5b0e1665a2d02000007
function objConcat(arr){
    return Object.assign(...arr)
}
//task 6 https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this,'fullName',{
        get:function (){
            return this.firstName +' ' + this.lastName
        },
        set: function(newFullName) {
            let fullName = newFullName.split(' ');

            if(fullName.length === 2 ){
                this.firstName = fullName[0];
                this.lastName = fullName[1];
            }
        }

    })
}
