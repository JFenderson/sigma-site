// lt --port 8000 to open in localtunnnel
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import routes from './routes/index-route'
import cors from 'cors';
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, '../html/index.html'),
            compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname + '../vendors')));
app.use(express.static(path.join(__dirname + '../styles')));
app.use(express.static(path.join(__dirname + '../js')));
app.use(express.static(path.join(__dirname + '../html')));
app.use('/api', routes);
app.set('port', process.env.PORT || 8080)
app.listen(app.get('port'), (err) => {
    if(err){
      console.log(err)
    }else{
      console.log(`server listening on ${app.get('port')}`)
    }
  });