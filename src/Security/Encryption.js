import CryptoJS from "crypto-js"
const secret_key ="Hello World"

export default function encryption(password){
   const cipherText = CryptoJS.AES.encrypt(password, secret_key).toString()
   return cipherText
}