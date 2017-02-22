var express = require("express");
var path = require("path");
var open = require("open");

//webpack
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

var app = express();
var apiRoutes = express.Router()
var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

apiRoutes.get('/seller',function (req, res) {
    res.json({
        errno:0,
        data:seller
    })
})
apiRoutes.get('/goods',function (req, res) {
    res.json({
        errno:0,
        data:goods
    })
})
apiRoutes.get('/ratings',function (req, res) {
    res.json({
        errno:0,
        data:ratings
    })
})
app.use('/api',apiRoutes)

app.set('port',3000);
//app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('./static'))


var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
var hotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)
//app.use('/public', express.static('./public'))

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
    open('http://localhost:' + app.get('port') + '/index.html')
});