const defaultConfig = require('./defaultConfig')
const { assign } = Object

module.exports = class Unipush {
    constructor(config) {
        config = assign(defaultConfig, config)
        
    }
}