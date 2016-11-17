import 'babel-polyfill'

import throng from 'throng'
import App from './app'

function run() {
    App.start()
}

throng(1, run)
