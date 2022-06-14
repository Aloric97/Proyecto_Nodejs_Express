
//jwt config
module.exports = {

    secret: process.env.AUTH_SECRET || 'prueba12345',
    expires: process.env.AUTH_EXPIRES || '1d',
    round: process.env.AUTH_ROUND || 10
}
