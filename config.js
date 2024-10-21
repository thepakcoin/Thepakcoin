const config = {
telegram: {
token: require('fs').readFileSync('token.txt', 'utf8').trim(),
},
database: {
// Database connection details (agar aap database use karte hain)
},
};

module.exports = config;
