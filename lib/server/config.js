export default class Config {

    static HTTP_PORT = process.env.PORT || process.env.HTTP_PORT

    static get httpPort() {
        return this.HTTP_PORT
    }

    static set httpPort(value) {
        return this.HTTP_PORT = value
    }

}
