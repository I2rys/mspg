//Dependencies
const RandomString = require("randomstring")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <length> <amount> <output>")
    return
}

if(isNaN(Self_Args[0])){
    console.log("length is not a number.")
    return
}

if(isNaN(Self_Args[1])){
    console.log("amount is not a number.")
    return
}

if(!Self_Args[2]){
    console.log("output is invalid.")
    return
}

var passwords = []

console.log("Generating passwords, please wait.")
for( let i = 0; i <= Self_Args[1]; i++){
    passwords.push(RandomString.generate({
        charset: "ABCDEFGHIJKLMNOP_+)(*&^%$#@!~}{;/.?><0987654432|12345678901",
        length: Self_Args[0]
    }))
}

console.log(`Saving the generated passwords to ${Self_Args[2]}`)
Fs.writeFileSync(Self_Args[2], passwords.join("\n"), "utf8")
console.log(`Generated passwords has been saved to ${Self_Args[2]}`)