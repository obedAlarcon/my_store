const jwt = require('jsonwebtoken');
const secret = 'myCat'
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxNTc5NTg0MH0.vW21ns_tWBI4JXFjUqR9vRb3y1KSw7phMO2IOmd3a68'

function verifyToken(toket,secret){
    return jwt.verify(token,secret);
}
const payload = verifyToken(token, secret);
console.log(payload);

// este token lo tremos desde el archivo token sign y lo verificamos aqui 