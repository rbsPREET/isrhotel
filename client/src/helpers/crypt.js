import CryptoJS from 'crypto-js';


export function Encrypt(word, key = 'share') {
    let encJson = CryptoJS.AES.encrypt(JSON.stringify(word), key).toString()
    return encJson
}

//解密方法aes
export function Decrypt(word, key = 'share') {
    console.log(word)
    let bytes = CryptoJS.AES.decrypt(word, key).toString(CryptoJS.enc.Utf8)
    return JSON.parse(bytes)
}