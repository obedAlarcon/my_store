

const bcrypt = require('bcrypt');


async function verifyPassword() {
    const myPassword ='obed2024@';
    const hash ='$2b$10$d1zj7NJkHQCHjMOI1G5I9OWSl06T2eSAAF35NRcsJvDa9cBBUF53u';
    const isMatch =await  bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}
 
 verifyPassword()