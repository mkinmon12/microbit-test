/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace encryption {
    /**
     * TODO: describe your function here
     * @param s describe parameter here, eg: "Hello"
     * @param n describe parameter here, eg: 5
     */
    //% block
    export function shift(s: string, n: number): string {
        return "This would be encrypted"
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}

namespace Math {
    /**
     * Perform modular arithmetic that returns a positive value.
     * Returns the remainder of a divided by n.
     * @param a The value to be divided.
     * @param n The value that divides a. 
     */
    //% block="%a | mod | %n"
    export function mod(a: number, n: number): number {
        return (a % n + n) % n
    }
}


//% weight=100 color=#0fbc11 icon="📚"
namespace dictionaries { 

    let _dicts: Dictionary[];

    //% block = "New Dictionary"
    export function createDictionary(): Dictionary {
        init();
        let newDictionary = new Dictionary();
        return newDictionary;
    }
    
    //%
    export class Dictionary {
        public keys: string[];
        public values: string[];

        constructor(){
            init();
            this.keys = [];
            this.values = [];
            _dicts.push(this);
        }

        //% block="set | %dictionary | %key | : | %value"
        public setPair(key: string, value: string): void{
            this.keys.push(key)
            this.values.push(value)
        }

        //% block="%dictionary | get value at key | %key"
        public getValue(key: string): string {
            let index = this.keys.indexOf(key)
            if (index > -1){
                return this.values[index]
            }
            return 'key not found'
        }

        //% block="%dictionary | delete pair at key | %key"
        public delPair(key: string): void {
            let index = this.keys.indexOf(key)
            if (index > -1){
                this.keys.splice(index, 1)
                this.values.splice(index, 1)
            }
        }
    }

    function init(): void {
        _dicts = (<Dictionary[]>[]);
    }
}



