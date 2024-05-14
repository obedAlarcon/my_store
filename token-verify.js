const jwt = require('jsonwebtoken');
const secret = 'myCat'
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxNTY1MDE4OH0.36UhJpk2mCOnCiMwXFWEwd3_bWyAEVL3SunAAspT3YM'


function verifyToken(toket,secret){
    return jwt.verify(token,secret);
}
const payload = verifyToken(token, secret);
console.log(payload);

// este token lo tremos desde el archivo token sign y lo verificamos aqui 