import WebappHandler from './handlers/webapp_handler'

export default class Routes {

    static setup(app) {
        app.get('*', WebappHandler.main)
    }

}
