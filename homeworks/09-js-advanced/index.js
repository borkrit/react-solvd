/**
 * REMOVEME To mock the class you to provide us with
 * @typedef {{
 *   serialize(): string,
 *   wakeFrom(serialized: string): Serializable
 * }} Serializable
 */


class Serializable {

    serialize() {
        const serializedClass =  this.constructor.name
        const props = this._serializeProps(this)
        return JSON.stringify({ serializedClass ,props })
    }
    _serializeProps(obj) {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                result[key] = this.setSerializeValue(value);
            }
        }
        return result;
    }
    setSerializeValue(value) {
        if (value === null || value === undefined) {
            return { type: 'null', value: null };
        }
        if (Array.isArray(value)) {
            return { type: 'array', value: value.map(v => this.setSerializeValue(v)) };
        }
        if (value instanceof Date) {
            return { type: 'date', value: value.toISOString() };
        }
        if (typeof value === 'object') {
            return { type: 'object', value: this._serializeProps(value) };
        }
        if (typeof value === 'number') {
            return { type: 'number', value: value };
        }
        if (typeof value === 'string') {
            return { type: 'string', value: value };
        }
        throw new Error(`Unsupported value type: ${typeof value}`);
    }


     wakeFrom(serializedString) {

        const {serializedClass,props} = JSON.parse(serializedString)


         if( serializedClass !== this.constructor.name )   throw new Error(`serialized data has data from other class ${serializedClass} `);

        return this.deserializeProps.apply(this,[props])


    }
    deserializeProps(obj){
        for (const objKey in obj) {
            this[objKey] = this.deserializeValue(obj[objKey])
        }
        return this
    }
    deserializeValue({type, value}){
        switch (type){
            case 'null':
                return null;
            case 'string':
            case 'number':
                return value;
            case 'date':
                return new Date(value);
            case 'object':
                return this.deserializeProps(value)
            case 'array':
                return value.map(el=>this.deserializeValue(el));
            default:
                throw new Error(`Unsupported value type during deserialization: ${type}`);
        }
    }

}

class UserDTO extends Serializable {
    constructor({firstName, lastName, phone, birth} = {}) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birth = birth;
    }

    printInfo() {
        console.log(
            `${this.firstName[0]}. ${this.lastName} - ${
                this.phone
            }, ${this.birth.toISOString()}`,
        );
    }
}

let tolik = new UserDTO({
    firstName: 'Anatoliy',
    lastName: 'Nashovich',
    phone: '2020327',
    birth: new Date('1999-01-02'),
});

tolik.printInfo(); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
const serialized = tolik.serialize();
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z
class Post extends Serializable {
    constructor({content, date, author} = {}) {
        super();

        this.content = content;
        this.date = date;
        this.author = author;
    }
}

console.log(new Post().wakeFrom(serialized));