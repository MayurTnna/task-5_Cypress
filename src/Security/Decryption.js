import CryptoJS from "crypto-js";
const secret_key = "Hello World"

export default function decryption(password){
    const plainText = CryptoJS.AES.decrypt(password, secret_key)
    return plainText

}