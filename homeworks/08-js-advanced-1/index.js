
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

    let value = obj;

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

function clone(obj){
    return structuredClone(obj)
}
const clonedUser = clone(user2);
clonedUser.preferences.sound.maxValue = 70;
console.log(
    user2.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
);