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
//% groups='["Shift Ciphers", "Vigenere Ciphers"]'
namespace encryption {

    /**
     * TODO: describe your function here
     * @param s describe parameter here, eg: "Hello"
     * @param n describe parameter here, eg: 5
     */
    //% block="shift | %s | with key | %n"
    //% group="Shift Ciphers"
    export function shift(s: string, n: number): string {
        n = Math.round(n)
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        let result = ''
        for (let i = 0; i < s.length; i++){
            let index = alphabet.indexOf(s.charAt(i).toLowerCase())
            if (index > -1){
                result = result + alphabet.charAt(Math.mod(index + n, alphabet.length))
            }
            else{
                result = result + s.charAt(i)
            }
        }
        return result
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% group="Vigenere Ciphers"
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
namespace pairings { 

    let _pairings: Pairing[];

    //% block = "new mapping"
    export function createPairing(): Pairing {
        init();
        let newMapping = new Pairing();
        return newMapping;
    }
    
    //%
    export class Pairing {
        public keys: string[];
        public values: string[];

        constructor(){
            init();
            this.keys = [];
            this.values = [];
            _pairings.push(this);
        }

        //% block="set | %pairing | %key | : | %value"
        public setPair(key: string, value: string): void{
            let index = this.keys.indexOf(key)
            if (index > -1) {
                this.values[index] = value
            }
            else{
                this.keys.push(key)
                this.values.push(value)
            }
            
        }

        //% block="%pairing | get value at key | %key"
        public getValue(key: string): string {
            let index = this.keys.indexOf(key)
            if (index > -1){
                return this.values[index]
            }
            return 'key not found'
        }

        //% block="%pairing | delete pair at key | %key"
        public delPair(key: string): void {
            let index = this.keys.indexOf(key)
            if (index > -1){
                this.keys.splice(index, 1)
                this.values.splice(index, 1)
            }
        }
    }

    function init(): void {
        _pairings = (<Pairing[]>[]);
    }
}



