

const bcrypt = require('bcrypt');


async function verifyPassword() {
    const myPassword ='obed2024@';
    const hash ='$2b$10$J75pLaW1FHZuIQLo9o18WOcaMYt65WD3y5XWe.SlNSQpCDbq9I676';
    const isMatch =await  bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}
 
 verifyPassword()