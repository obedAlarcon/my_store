const bcrypt = require('bcrypt');


async function hashPassword(){
    const myPassword ='obed2024@';
    const hash =await  bcrypt.hash(myPassword,10);
    console.log(hash);
}
 
 hashPassword()