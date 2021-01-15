/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */



/**
 * Custom blocks
 */
//% weight=100 color=#00C1D4 icon="☰"
//% groups='["Shift Ciphers", "Vigenere Ciphers", "Pigpen"]'
namespace encryption {

    //% block
    export const alphabet = "abcdefghijklmnopqrstuvwxyz"

    /**
     * Shift a message using a numeric key.
     * @param s a message to encrypt, eg: "Hello"
     * @param n a numeric shift, eg: 5
     */
    //% block="shift | %s | with key | %n"
    //% group="Shift Ciphers"
    export function shiftNumeric(s: string, n: number): string {
        n = Math.round(n)
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
     * Shift a message using an alphabetic key.
     * @param s describe parameter here, eg: "Hello"
     * @param k1 describe parameter here, eg: "a"
     * @param k2 describe parameter here, eg: "d"
     */
    //% block="shift | %s | with shift | %k1 | to | %k2"
    //% group="Shift Ciphers"
    export function shiftAlpha(s: string, k1: string, k2: string): string {
        k1 = k1.charAt(0).toLowerCase()
        k2 = k2.charAt(0).toLowerCase()
        let n1 = alphabet.indexOf(k1)
        let n2 = alphabet.indexOf(k2)
        return shiftNumeric(s, n2 - n1)
    }

    /**
     * TODO: describe your function here
     * @param s describe value here, eg: "hello"
     * @param k1 describe value here, eg: Letter.A 
     * @param k2 describe value here, eg: Letter.D
    */
    //% block="shift | %s | with shift | %k1=device_letter | to | %k2=device_letter"
    //% useEnumVal=1
    //% group="Shift Ciphers"
    export function shiftAlphaTwo(s: string, k1: number, k2: number): string{
        return shiftNumeric(s, k2 - k1)
    }

    //% blockId=device_letter block="%name"
    //% useEnumVal=1
    //& i.fieldEditor="imagedropdown"
    //% i.fieldOptions.columns = "13"
    //% i.fieldOptions.width = "380"
    //% i.fieldOptions.maxRows = 2
    export function letterValue(name: Letter): number {
        return name;
    }

    /**
     * Pigpen
     * @param text: string
     */
    //% block
    //% group="Pigpen"
    export function Pigpen(text: string): void{
        let plainTextMessage = text
        let letters: {[key: string]: Image} = {    
            a: images.createImage(`. . . . #\n. . . . #\n. . . . #\n. . . . #\n# # # # #`),
            b: images.createImage(`. . . . #\n. . . . #\n. . # . #\n. . . . #\n# # # # #`),
            c: images.createImage(`# . . . #\n# . . . #\n# . . . #\n# . . . #\n# # # # #`),
            d: images.createImage(`# . . . #\n# . . . #\n# . # . #\n# . . . #\n# # # # #`),
            e: images.createImage(`# . . . .\n# . . . .\n# . . . .\n# . . . .\n# # # # #`),
            f: images.createImage(`# . . . .\n# . . . .\n# . # . .\n# . . . .\n# # # # #`),
            g: images.createImage(`# # # # #\n. . . . #\n. . . . #\n. . . . #\n# # # # #`),
            h: images.createImage(`# # # # #\n. . . . #\n. . # . #\n. . . . #\n# # # # #`),
            i: images.createImage(`# # # # #\n# . . . #\n# . . . #\n# . . . #\n# # # # #`),
            j: images.createImage(`# # # # #\n# . . . #\n# . # . #\n# . . . #\n# # # # #`),
            k: images.createImage(`# # # # #\n# . . . .\n# . . . .\n# . . . .\n# # # # #`),
            l: images.createImage(`# # # # #\n# . . . .\n# . # . .\n# . . . .\n# # # # #`),
            m: images.createImage(`# # # # #\n. . . . #\n. . . . #\n. . . . #\n. . . . #`),
            n: images.createImage(`# # # # #\n. . . . #\n. . # . #\n. . . . #\n. . . . #`),
            o: images.createImage(`# # # # #\n# . . . #\n# . . . #\n# . . . #\n# . . . #`),
            p: images.createImage(`# # # # #\n# . . . #\n# . # . #\n# . . . #\n# . . . #`),
            q: images.createImage(`# # # # #\n# . . . .\n# . . . .\n# . . . .\n# . . . .`),
            r: images.createImage(`# # # # #\n# . . . .\n# . # . .\n# . . . .\n# . . . .`),
            s: images.createImage(`. . . . .\n. . . . .\n# . . . #\n. # . # .\n. . # . .`),
            t: images.createImage(`. . . . .\n. . # . .\n# . . . #\n. # . # .\n. . # . .`),
            u: images.createImage(`. . # . .\n. . . # .\n. . . . #\n. . . # .\n. . # . .`),
            v: images.createImage(`. . # . .\n. . . # .\n. # . . #\n. . . # .\n. . # . .`),
            w: images.createImage(`. . # . .\n. # . # .\n# . . . #\n. . . . .\n. . . . .`),
            x: images.createImage(`. . # . .\n. # . # .\n# . . . #\n. . # . .\n. . . . .`),
            y: images.createImage(`. . # . .\n. # . . .\n# . . . .\n. # . . .\n. . # . .`),
            z: images.createImage(`. . # . .\n. # . . .\n# . . # .\n. # . . .\n. . # . .`),
            space: images.createImage(`. .\n. .\n. .\n. .\n. .`),
            ending: images.createImage(`. . .\n. . .\n. . .\n. . .\n. . .`)
        } 
        for (let value of plainTextMessage) {
            value = value.toLowerCase()
            if (alphabet.includes(value)) {
                letters[value].scrollImage(0, 250)
                letters.space.scrollImage(0, 250)
            }
            if (value == ' ') {
                letters.space.scrollImage(0, 250)
            }
        }
    
    letters.ending.scrollImage(0, 250)    
    }
    /**
     * morse
     * @param text write description here, eg: "hello"
     * @param time write description here, eg: 2
     */
    //% block
    //% time.min=1 time.max=10
    export function Morse(text: string, time: number = 8): void{
        time = 11-time
        let plainTextMessage = text
        let check = ' 0123456789abcdefghijklmnopqrstuvwxyz'
        let code: { [key: string]: String} = {
            ' ': 'xxxxx',
            '0': '-----',
            '1': '.----',
            '2': '..---',
            '3': '...--',
            '4': '....-',
            '5': '.....',
            '6': '-....',
            '7': '--...',
            '8': '---..',
            '9': '----.',
            'a': '.-',
            'b': '-...',
            'c': '-.-.',
            'd': '-..',
            'e': '.',
            'f': '..-.',
            'g': '--.',
            'h': '....',
            'i': '..',
            'j': '.---',
            'k': '-.-',
            'l': '.-..',
            'm': '--',
            'n': '-.',
            'o': '---',
            'p': '.--.',
            'q': '--.-',
            'r': '.-.',
            's': '...',
            't': '-',
            'u': '..-',
            'v': '...-',
            'w': '.--',
            'x': '-..-',
            'y': '-.--',
            'z': '--..' 
        }
        let dot = images.createImage(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        let dash = images.createImage(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        let morseMessage = ''
        for (let value of plainTextMessage) {
            value = value.toLowerCase()
            if (check.includes(value)) {
                morseMessage = morseMessage + (code[value] + 'xx')
            }
        }
        serial.writeLine(morseMessage)
        for (let signal of morseMessage){
            if (signal == '.'){
                dot.showImage(0)
                basic.pause(100 * time)
                basic.clearScreen()
            }
            else if (signal == '-'){
                dash.showImage(0)
                basic.pause(300 * time)
                basic.clearScreen()
            }
            basic.pause(100 * time)
        }
        
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


//% color=#3CDBC0 weight=101 icon="☰"
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

enum Letter {
    //% blockIdentity=encryption.letterValue enumval=0
    A = 0,
    //% blockIdentity=encryption.letterValue enumval=1
    B = 1,
    //% blockIdentity=encryption.letterValue enumval=2
    C = 2,
    //% blockIdentity=encryption.letterValue enumval=3
    D = 3,
    //% blockIdentity=encryption.letterValue enumval=4
    E = 4,
    //% blockIdentity=encryption.letterValue enumval=5
    F = 5,
    //% blockIdentity=encryption.letterValue enumval=6
    H = 6,
    //% blockIdentity=encryption.letterValue enumval=7
    I = 7,
    //% blockIdentity=encryption.letterValue enumval=8
    J = 8,
    //% blockIdentity=encryption.letterValue enumval=9
    K = 9,
    //% blockIdentity=encryption.letterValue enumval=10
    L = 10,
    //% blockIdentity=encryption.letterValue enumval=11
    M = 11,
    //% blockIdentity=encryption.letterValue enumval=12
    N = 12
}



