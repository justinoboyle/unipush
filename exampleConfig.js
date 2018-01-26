const { ios, android, desktop } = require('unipush').platforms
const { file = readFileSync } = require('fs')

module.exports = {
    platforms: [
        ios({
            keyId: "",
            teamId: "",
            key: file(__dirname + '/certs/key.p8')
        }),
        android({
            serverKey: ''
        }),
        desktop({
            secret: ''
        })
    ],

}
